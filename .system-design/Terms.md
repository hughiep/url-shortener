# Terms

- **Indexing**
Most database use B-tree by default. Complexity is O(log n) for search, insert, and delete.
Hash indexing is O(1) for search, insert, and delete. But it is not good for range queries. And not every database supports hash indexing.
Primary key is unique and not null. It is used to identify a row in a table. It is indexed by default. In shortern problem, the primary key could be the short code.

- **Cache Strategies**

> Cache aside (Lazy loading): with TTL
> Write-through: write to cache and database
> Write-behind (Write-back): write to cache and update database asynchronously
> Refresh ahead: refresh cache before it expires

- **Cache Invalidation**
[https://redis.io/glossary/cache-invalidation/](https://redis.io/glossary/cache-invalidation/)
  Process of removing the cache when the data is no longer valid.
  It's crucial to maintain the cache consistency.
  - Time-based expiration
  - Event-based expiration
  - Command-based invalidation
  - Group-based invalidation

- **Redis counter**
Store the counter in Redis to remain the unique value across multiple instances.

- **Hash function**
A hashing algorithm, in the context of Computer Science, refers to a method used to convert data into a fixed-size string of characters.
Some commonly used hashing algorithms include Message Digest 5 (MD5) and Secure Hashing Algorithm (SHA) 1 and 2.
The transformation of a key to the corresponding value is done using a Hash Function

MD5: 128-bit hash value, 32 characters long
SHA-1: 160-bit hash value, 40 characters long
SHA-256: 256-bit hash value, 64 characters long
SHA-512: 512-bit hash value, 128 characters long

- **Base62 encoding**
Base62 encoding removes the case sensitivity of Base64 encoding and the URL unfriendliness of Base32 encoding. It is used to shorten the URL.

- **CDN**
CDN is a network of servers that deliver web content to users based on their geographic location.
It helps to reduce latency and improve the performance of the website.

- **Distributed cache**
Using Redis as a distributed cache to store the frequently accessed data. Reduce the latency and improve the performance of the application.

- **Horizontal scaling**
Put more machines to the system to handle the increased load.

- **Bottlenecks**
Bottlenecks are the points in a system where the flow of data is restricted or stopped entirely.
It can be caused by the network, CPU, memory, disk, etc.
In a system interview, you should identify the bottlenecks and propose solutions to remove them.
