# KeyGen Server

Backend server for the KeyGen project

## Requirements

* [Node.JS](https://nodejs.org)
* Redis server

## Installation

    git clone https://github.com/mehul1011/keygen-api.git
    cd keygen-api
    npm install

## Run

    npm start

### Options

* **JWT_SECRET** - String used to sign jwt tokens / **REQUIRED**

* **PORT** [*3000*] - Keygen Server port

* **SSL_PORT** [*3443*] - keygen Server port (SSL)

* **SSL_PRIVATE_KEY** [null] - SSL Private Key

* **SSL_CERTIFICATE** [null] - SSL Certificate

* **REDIS_HOST** [*localhost*] - Redis server host

* **REDIS_PORT** [*6379*] - Redis server port

## Description

Simple key-value server for storing encrypted data

### Endpoints

Requests should have `application/x-www-form-urlencoded` content type.

#### POST /sign_up

Register new account

**Parameters**

* login
* secret
* data (Optional) <DATA>

**Response**

    {
        "token": "<JWT_TOKEN>",
        "data": "<DATA>" or null
    }

#### POST /sign_in

Log in to the system

**Parameters**

* login
* secret

**Response**

    {
        "token": "<JWT_TOKEN>",
        "data": "<DATA>" or null
    }

#### GET /storage

Get storage for the logged in user.

You should add Authorization header with token which was
received on sign up or sign in step to the request.

    Authorization: Bearer <JWT_TOKEN>

**Response**

    <DATA>

#### PUT /storage

Update storage data for the logged in user.

You should add Authorization header with token which was
received on sign up or sign in step to the request.

    Authorization: Bearer <JWT_TOKEN>

**Parameters**

* data 


[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)