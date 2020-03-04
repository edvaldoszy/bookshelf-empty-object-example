# bookshelf-empty-object-example

## Install dependencies

```sh
$ yarn install
```

## Create database

Inside the project folder execute:

```sh
$ yarn create-database
```

It will create a file named `example.sqlite`.

## Database structure


### Table: users

| ID  | name      | active |
|-----|-----------|--------|
| `1` | `Edvaldo` | `true` |
| `2` | `Douglas` | `true` |
| `3` | `Bruna`   | `true` |
| `4` | `Elaine`  | `true` |


### Table: addresses

| ID  | street             | user_id |
|-----|--------------------|---------|
| `1` | `Douglas's Street` | `2`     |
| `2` | `Elaine's Street`  | `4`     |


## Example 1

```sh
$ yarn fetch-existing-address
```

Then Bookshelf includes `"address": {}` in every object because at least one record has an address associated.

```json
[
    {
        "id": 1,
        "name": "Edvaldo",
        "active": 1,
        "address": {}
    },
    {
        "id": 2,
        "name": "Douglas",
        "active": 1,
        "address": {
            "id": 1,
            "street": "Douglas's Street"
        }
    },
    {
        "id": 3,
        "name": "Bruna",
        "active": 1,
        "address": {}
    }
]
```


## Example 2

```sh
$ yarn fetch-non-existing-address
```

Then Bookshelf does not includes `"address": {}` in every object because no one record has an address associated.

```json
[
    {
        "id": 1,
        "name": "Edvaldo",
        "active": 1
    },
    {
        "id": 3,
        "name": "Bruna",
        "active": 1
    }
]
```
