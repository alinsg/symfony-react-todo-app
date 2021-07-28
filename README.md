# symfony-react-todo-app

## Installation

### 1. Install necessary Composer dependencies.

```sh
$ composer install
```

### 2. Install necessary Node modules.

```sh
$ yarn install
```

### 3. Set up the database using Docker

Create a file at the root of the project called .env.local and add:
```
APP_ENV=dev
```

The step above is necessary because in the .env file, APP_ENV is set to "prod" and dev dependencies cannot be accessed in production.

After that, run one of those commands in order to create a docker container using a database.

```sh
$ ./bin/console make:docker:database
```

or

```sh
$ symfony console make:docker:database
```

When being asked you can select **MySQL (0)** as the Database, **latest** version and for the name use **todo**.

After it's finished, use

```sh
$ docker-compose up -d
```

#### Optional

If you want to check out the database:

##### With MySQL installed

Get the exposed Docker container port using

```sh
$ docker-compose ps
```

Then run

```sh
$ mysql -u root --password=password --host=127.0.0.1 --port=EXPOSED_PORT
```

##### Without MySQL installed

You can execute the mysql command inside the docker container.

```sh
$ docker-compose exec database mysql -u root --password=password
```

After this you can run the usual MySQL commands but right now the Database is empty.

### 4. Populate Database

#### Make Doctrine Migration

```sh
$ symfony console doctrine:migrations:migrate
```

#### Populate Database with mock data

```sh
$ symfony console doctrine:fixtures:load
```

### 5. Done

The setup is now complete. You can use the web interface to add todos or use the API

## API

### Get all tasks

Make a GET request to

```
localhost:8000/api/todo/read
```

### Create a task

Make a POST request to

```
localhost:8000/api/todo/create
```

The body should be in JSON form like:

```json
{
  "task": "test"
}
```

### Update a task

Make a PUT request to

```
localhost:8000/api/todo/update/{id}
```

### Delete a task

Make a DELETE request to

```
localhost:8000/api/todo/delete/{id}
```
