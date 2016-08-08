{
    "swagger": "2.0",
    "info": {
        "version": "0.1.0",
        "title": "hackzurich 2016 - AXA Winterthur - API"
    },
    "host": "hackzurich16.azurewebsites.net",
    "basePath": "/axa",
    "definitions": {
        "Customers": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/Customer"
            }
        },
        "CustomerResultList": {
            "type": "object",
            "properties": {
                "data": {
                    "$ref": "#/definitions/Customers"
                },
                "links": {
                    "$ref": "#/definitions/Link"
                }
            }
        },
        "Customer": {
            "properties": {
                "id": {
                    "type": "string",
                    "format": "integer",
                    "description": "id of customer"
                },
                "gender": {
                    "type": "string",
                    "description": "gender (male, female)"
                },
                "title": {
                    "type": "string",
                    "description": "additional title of name e.g Dr."
                },
                "givenName": {
                    "type": "string",
                    "description": "first name"
                },
                "middleInitial": {
                    "type": "string",
                    "description": "short initial of middle name"
                },
                "surname": {
                    "type": "string",
                    "description": "last name"
                },
                "streetAddress": {
                    "type": "string",
                    "description": "address field of location incl number"
                },
                "city": {
                    "type": "string",
                    "description": "city of address"
                },
                "zipCode": {
                    "type": "integer",
                    "description": "zipcode of city"
                },
                "country": {
                    "type": "string",
                    "description": "country ISO code"
                },
                "countryFull": {
                    "type": "string",
                    "description": "full description of country based on ISO country code"
                },
                "emailAddress": {
                    "type": "string",
                    "description": "primary email address"
                },
                "username": {
                    "type": "string",
                    "description": "primary user name"
                },
                "password": {
                    "type": "string",
                    "description": "visibile password. Just for testing purposes"
                },
                "telephoneNumber": {
                    "type": "string",
                    "description": "primary phone number in local format. including prefix 0"
                },
                "telephoneCountryCode": {
                    "type": "string",
                    "description": "country code of primary phone number without leading 00 or +"
                },
                "birthday": {
                    "type": "string",
                    "description": "date of birth in form yyyy-mm-dd"
                },
                "age": {
                    "type": "integer",
                    "description": "calculated date based on year 2016. only for tests - not dynamic"
                },
                "occupation": {
                    "type": "string",
                    "description": "endlish expression of job title"
                },
                "company": {
                    "type": "string",
                    "description": "name of company"
                },
                "vehicle": {
                    "type": "string",
                    "description": "name of car vehicle type"
                },
                "kilograms": {
                    "type": "integer",
                    "description": "current weight of customer at 16.9.2016, hackzurich"
                },
                "centimeters": {
                    "type": "integer",
                    "description": "body height in cm"
                },
                "location": {
                    "$ref": "#/definitions/Location2Dsphere"
                }
            }
        },
        "Location2Dsphere": {
            "title": "Spherical 2D location",
            "description": "Location structure of 2D spherical point positioning with long and lat",
            "properties": {
                "type": {
                    "description": "type of 2D representation. here always point",
                    "default": "Point",
                    "type": "string"
                },
                "coordinate": {
                    "description": "array of 2 integer values with longitude and latitude",
                    "type": "array",
                    "items": {
                        "type": "number",
                        "format": "double"
                    }
                }
            }
        },
        "Link": {
            "title": "navigation links of result lists",
            "properties": {
                "cur": {
                    "type": "string",
                    "description": "URL of the current page request. including needed skip + limit parameters"
                },
                "first": {
                    "type": "string",
                    "description": "URL for first paging call"
                },
                "prev": {
                    "type": "string",
                    "description": "URL for prev paging call. Can be null if no prev possible, because already on first page"
                },
                "next": {
                    "type": "string",
                    "description": "URL for next paging call. Can be null if no next possible, because already on last page"
                },
                "last": {
                    "type": "string",
                    "description": "URL for last paging call"
                },
                "count": {
                    "type": "number",
                    "format": "integer",
                    "description": "nof of results in this page. Always <= limit"
                },
                "totalCount": {
                    "type": "number",
                    "format": "integer",
                    "description": "total count of results for query"
                }
            }
        }
    },
    "paths": {
        "/customers": {
            "get": {
                "description": "get all customers using. max limit 100, using skip + limit ro range\n",
                "parameters": [
                    {
                        "name": "skip",
                        "in": "query",
                        "description": "nof items skipped in result. Default = 0. Used with limit for paging",
                        "required": false,
                        "type": "number",
                        "format": "integer"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "limit no of responses. Default = 20. Used with skip for paging",
                        "required": false,
                        "type": "number",
                        "format": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "schema": {
                            "$ref": "#/definitions/CustomerResultList"
                        }
                    }
                }
            }
        },
        "/customers/{id}": {
            "get": {
                "description": "get all attributes of a customer based on id\n",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "id of customer",
                        "required": true,
                        "type": "string",
                        "format": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "schema": {
                            "$ref": "#/definitions/Customer"
                        }
                    }
                }
            }
        }
    }
}