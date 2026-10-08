import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface GoogleReview {
  authorName: string;
  authorUri?: string;
  rating: number;
  relativePublishTimeDescription: string;
  text: string;
  publishTime?: string;
}

export interface GoogleReviewsData {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
  googleMapsUri: string;
}

interface GooglePlaceResponse {
  rating?: unknown;
  userRatingCount?: unknown;
  googleMapsUri?: unknown;
  reviews?: Array<{
    rating?: unknown;
    relativePublishTimeDescription?: unknown;
    publishTime?: unknown;
    text?: { text?: unknown };
    authorAttribution?: { displayName?: unknown; uri?: unknown };
  }>;
}

const cachePath = resolve('src/data/google-reviews.json');
const placesEndpoint = 'https://places.googleapis.com/v1/places';

function readCache(): GoogleReviewsData | null {
  if (!existsSync(cachePath)) return null;

  try {
    const cached = JSON.parse(readFileSync(cachePath, 'utf8')) as GoogleReviewsData;
    if (
      typeof cached.rating !== 'number' ||
      typeof cached.userRatingCount !== 'number' ||
      typeof cached.googleMapsUri !== 'string' ||
      !Array.isArray(cached.reviews)
    ) {
      return null;
    }
    return cached;
  } catch {
    return null;
  }
}

function normalizeReview(review: NonNullable<GooglePlaceResponse['reviews']>[number]): GoogleReview | null {
  const authorName = review.authorAttribution?.displayName;
  const rating = review.rating;
  const relativePublishTimeDescription = review.relativePublishTimeDescription;
  const text = review.text?.text;

  if (
    typeof authorName !== 'string' ||
    typeof rating !== 'number' ||
    typeof relativePublishTimeDescription !== 'string' ||
    typeof text !== 'string'
  ) {
    return null;
  }

  return {
    authorName,
    authorUri: typeof review.authorAttribution?.uri === 'string' ? review.authorAttribution.uri : undefined,
    rating,
    relativePublishTimeDescription,
    text,
    publishTime: typeof review.publishTime === 'string' ? review.publishTime : undefined,
  };
}

async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const response = await fetch(`${placesEndpoint}/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
    });

    if (!response.ok) return null;

    const place = (await response.json()) as GooglePlaceResponse;
    if (
      typeof place.rating !== 'number' ||
      typeof place.userRatingCount !== 'number' ||
      typeof place.googleMapsUri !== 'string'
    ) {
      return null;
    }

    const reviews = (place.reviews ?? [])
      .map(normalizeReview)
      .filter((review): review is GoogleReview => review !== null);

    return {
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      reviews,
      googleMapsUri: place.googleMapsUri,
    };
  } catch {
    return null;
  }
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const liveData = await fetchGoogleReviews();

  if (liveData) {
    try {
      writeFileSync(cachePath, `${JSON.stringify(liveData, null, 2)}\n`, 'utf8');
    } catch {
      // The live response is still safe to render when the cache cannot be written.
    }
    return liveData;
  }

  return readCache();
}
