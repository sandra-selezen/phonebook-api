### GET /api/contacts

- Returns an array of all contacts in json format with status 200

### GET /api/contacts/:id

- Gets the id parameter
- If there is such an id, returns the contact object in JSON format with status 200
- If there is no such id, returns json with { "message": "Not found" } key and 404 status

### POST /api/contacts

- Returns an object with the added id { id, name, email, phone_number, favorite } and status 201

### DELETE /api/contacts/:id

- Gets the id parameter
- If there is such an id, it returns JSON of the format { "message": "contact deleted" } with status 200
- If there is no such id, returns JSON with the key { "message": "Not found" } and status 404

### PUT /api/contacts/:id

- Gets the id parameter
- If there is no such id, returns JSON with the key { "message": "Not found" } and status 404
- Gets body in JSON format, updating any name, phone_number fields
- Returns an updated contact object with a status of 200. Otherwise, returns json with { "message": "Not found" } key and 404 status

### PATCH /api/contacts/:contactId/favorite

- Gets the id parameter
- If there is no such id, returns JSON with the key { "message": "Not found" } and status 404
- Returns an updated contact object with a status of 200. - Otherwise, returns JSON with { "message": "Not found" } key and 404 status
