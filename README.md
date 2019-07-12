# First Express Server

This is a single resource API using Express.

## Directions

* Pick a "resource" for your API, like `penguins`
* Implement:
    * `GET /<resource>` - returns array of all of the resources
    * `POST /<resource>` - inserts the supplied request body as a document into the resource collection
    * `GET /<resource>/:id` -
      * returns the single object specified by the id
    * `DELETE /<resource>/:id` - removes the resource with that id
      * **not** an error if doesn't exist.
    * `PUT /<resource>/:id` - updates the resource with supplied request body
* Use plural name in your url path (`/penguins`, **not** `/penguin`)
