# Requirements

## Functional requirements

1. Given a URL, the service should return a shortened URL.
2. When a shortened URL is visited, the service should redirect to the original URL.

### Nice to have

1. The service should provide analytics on how many times a shortened URL is visited.
2. The service should provide an option to customize the shortened URL.
3. The service should provide an option to set an expiration date for the shortened URL.
4. The service should provide an option to set a password for the shortened URL.
5. The service should provide an option to set a limit on the number of times the shortened URL can be visited in a given time period, user or ip address.

## Non-functional requirements

Refer to specifications about how a system operates, rather than what it does. Non-functional requirements are constraints on the services or functions offered by the system.

1. Should ensure uniqueness of the shortened URL.
2. Redirects with shortened URLs should be fast.
3. The system should be highly available. (No downtime, > consistency)
4. The system should scale to support a large number of new URLs and redirects. 1B URLs and 100M new URLs per day.

### Nice to have

1. Security features to prevent spam, phishing, and other malicious activities.
