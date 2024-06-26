# Onderzoekdoen.nl-project

Certainly! Here's a list of all the routes in your `CustomerController`, along
with a brief description of what each route does. You can include this in your
README file to help users understand the API endpoints.

### Customer Routes

#### Create a Customer

-   **Endpoint:** `POST /customers`
-   **Description:** Creates a new customer with the provided details.
-   **Body Parameters:**
    -   `companyName` (string): The name of the company.
    -   `phone` (string, optional): The phone number of the customer.
    -   `email` (string): The email address of the customer.

#### Get All Customers

-   **Endpoint:** `GET /customers`
-   **Description:** Retrieves a list of all customers.

#### Get a Customer by ID

-   **Endpoint:** `GET /customers/:id`
-   **Description:** Retrieves the details of a specific customer by their ID.
-   **Path Parameters:**
    -   `id` (string): The ID of the customer.

#### Update a Customer

-   **Endpoint:** `PATCH /customers/:id`
-   **Description:** Updates the details of a specific customer by their ID.
-   **Path Parameters:**
    -   `id` (string): The ID of the customer.
-   **Body Parameters:**
    -   `companyName` (string, optional): The name of the company.
    -   `phone` (string, optional): The phone number of the customer.
    -   `email` (string, optional): The email address of the customer.

#### Delete a Customer

-   **Endpoint:** `DELETE /customers/:id`
-   **Description:** Deletes a specific customer by their ID.
-   **Path Parameters:**
    -   `id` (string): The ID of the customer.

### Remark Routes

#### Add a Remark to a Customer

-   **Endpoint:** `POST /customers/:id/remarks`
-   **Description:** Adds a remark to a specific customer.
-   **Path Parameters:**
    -   `id` (string): The ID of the customer.
-   **Body Parameters:**
    -   `content` (string): The content of the remark.

#### Update a Remark

-   **Endpoint:** `PATCH /customers/remarks/:id`
-   **Description:** Updates the content of a specific remark.
-   **Path Parameters:**
    -   `id` (string): The ID of the remark.
-   **Body Parameters:**
    -   `content` (string, optional): The content of the remark.

#### Delete a Remark

-   **Endpoint:** `DELETE /customers/remarks/:id`
-   **Description:** Deletes a specific remark.
-   **Path Parameters:**
    -   `id` (string): The ID of the remark.

### Interest Routes

#### Add an Interest to a Customer

-   **Endpoint:** `POST /customers/:id/interests`
-   **Description:** Adds an interest to a specific customer.
-   **Path Parameters:**
    -   `id` (string): The ID of the customer.
-   **Body Parameters:**
    -   `interest` (string): The interest.
    -   `description` (string, optional): The description of the interest.

#### Update an Interest

-   **Endpoint:** `PATCH /customers/interests/:id`
-   **Description:** Updates the details of a specific interest.
-   **Path Parameters:**
    -   `id` (string): The ID of the interest.
-   **Body Parameters:**
    -   `interest` (string, optional): The interest.
    -   `description` (string, optional): The description of the interest.

#### Delete an Interest

-   **Endpoint:** `DELETE /customers/interests/:id`
-   **Description:** Deletes a specific interest.
-   **Path Parameters:**
    -   `id` (string): The ID of the interest.

### Contact Routes

#### Add a Contact to a Customer

-   **Endpoint:** `POST /customers/:id/contacts`
-   **Description:** Adds a contact to a specific customer.
-   **Path Parameters:**
    -   `id` (string): The ID of the customer.
-   **Body Parameters:**
    -   `contactDate` (string, ISO 8601 date): The date of contact.
    -   `note` (string, optional): A note about the contact.

#### Update a Contact

-   **Endpoint:** `PATCH /customers/contacts/:id`
-   **Description:** Updates the details of a specific contact.
-   **Path Parameters:**
    -   `id` (string): The ID of the contact.
-   **Body Parameters:**
    -   `contactDate` (string, optional, ISO 8601 date): The date of contact.
    -   `note` (string, optional): A note about the contact.

#### Delete a Contact

-   **Endpoint:** `DELETE /customers/contacts/:id`
-   **Description:** Deletes a specific contact.
-   **Path Parameters:**
    -   `id` (string): The ID of the contact.
