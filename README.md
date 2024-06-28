# Onderzoekdoen.nl-project

## Introductie

Dit project is ontwikkeld als 'test' project voor mijn stage. Het bestaat uit
een backend gebouwd met NestJS en een frontend gebouwd met React. In dit
document zal ik mijn keuzes voor deze technologieën toelichten en uitleggen hoe
je het project kunt opzetten en draaien.

## Keuze van Technologieën

### NestJS

Ik heb gekozen voor NestJS omdat ik het leuk vind om nieuwe frameworks te leren.
NestJS biedt een gestructureerde en makkelijk te begrijpen architectuur die het
mogelijk maakt om snel productief te zijn. De modulariteit en de ondersteuning
voor TypeScript maken het een krachtige tool voor backend development.

### React

Voor de frontend heb ik gekozen voor React omdat het een zeer
gebruiksvriendelijke bibliotheek is voor het ontwerpen van interfaces. Met
behulp van Shadcn kun je eenvoudig en effectief designen, wat bijdraagt aan een
prettige gebruikersvriendelijkheid.

## Tijdsbestek

Ik heb in totaal 6 uur en 52 minuten besteed aan dit project, volgens WakaTime.
(Voor screenshot kan je altijd mailtje sturen.)

## Design en Functionaliteiten

Mijn focus lag voornamelijk op het implementeren van de benodigde
functionaliteiten en niet zozeer op het verfijnen van het design. Het doel was
om een werkende applicatie op te leveren met de benodigde functionaliteiten.

## Installatie en Gebruik

Volg de onderstaande stappen om het project te installeren en te runnen.

### Backend (NestJS)

1. Navigeer naar de backend map:
    ```bash
    cd backend
    ```
2. Installeer de benodigde dependencies:
    ```bash
    npm install
    ```
3. Start de server:
    ```bash
    npm run start
    ```

De NestJS server draait op [http://localhost:3000](http://localhost:3000).

### Frontend (React)

1. Navigeer naar de frontend map:
    ```bash
    cd frontend
    ```
2. Installeer de benodigde dependencies:
    ```bash
    npm install
    ```
3. Start de ontwikkelserver:
    ```bash
    npm start
    ```

De React applicatie draait op [http://localhost:3001](http://localhost:3001).

### Database Seed

Om de database te seeden voor een testgebruikersaccount, voer het volgende
commando uit in de backend map:

```bash
npm run seed
```

Inloggegevens voor het testaccount zijn:

-   **Username:** admin
-   **Password:** admin

## Conclusie

Bedankt voor het bekijken van mijn stageproject. Ik hoop dat deze Readme
duidelijk genoeg is om je op weg te helpen. Voor eventuele vragen of
opmerkingen, aarzel niet om contact op te nemen.

### API Routes

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
