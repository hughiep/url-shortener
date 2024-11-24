URL Shortener

# Setup

## Core entities

1. URL
2. Shortened URL
3. User

## Design APIs

Simply go one by one and design the APIs for each requirement.

### Post endpoint to create a shortened URL

```http
POST /api/v1/shorten

{
  "url": "https://www.example.com",
  "alias": "example",
  "expiration": "2022-12-31",
}

Response:
{
  "shortened_url": "http://localhost:8080/example"
}
```

### Get endpoint to redirect to the original URL

```http
GET /example

Response:
Redirect to https://www.example.com

HTTP 302 Found Location: https://www.example.com
```