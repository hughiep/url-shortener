URL Shortener

# Low Level Design

Translate the high level design into a detailed technical design that is ready for implementation. Focus on the data structures, algorithms, and patterns that will be used to solve the problem.

## Object oriented design

![uml](./uml.png)

## Class Diagram

We will have the following classes:

1. **URLService**: This class will be responsible for generating and storing short URLs.
2. **Database**: This class will interact with the database.
3. **IDGenerator**: This class will be responsible for encoding a given numeric ID into a short URL.

## Database Design

We need to store the mapping of the original URL to the shortened URL. We can have two columns in the database to store these values. The table `url_mapping` will have the following schema:

```sql
url_mapping
-----------
  original_url varchar(512),
  short_url varchar(16),
  creation_date datetime,
  expiry_date datetime,
  user_id int,
  primary key(original_url),
  index short_url(short_url)
```

## Design Patterns

We can use the following design patterns:

1. **Singleton**: We can use the Singleton pattern for our `Database` class, as we only need one instance of this class.
2. **Factory Method**: We can use the Factory Method pattern to create the `URL` objects.

## Algorithms

### Generating short URL

To generate a short URL, we can use the following algorithm:

1. Take the MD5 hash of the original URL. This will give us a 128-bit hash value.
2. Take the first 6 bytes of the hash and convert them into an integer.
3. Convert the integer into a Base62 number. This will give us a 6-character short URL.

### Redirection

When a user accesses a short URL, we need to redirect them to the original URL. To do this, we can use the following algorithm:

1. Take the short URL and convert it back into an integer using Base62.
2. Look up the original URL in the database using the integer value.
3. Redirect the user to the original URL.

## Data Structures

We can use the following data structures:

1. **HashMap**: We can use a HashMap to store the mapping of the original URL to the shortened URL.
2. **PriorityQueue**: We can use a PriorityQueue to store the URLs based on their creation date.
