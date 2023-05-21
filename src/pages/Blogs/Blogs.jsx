/* eslint-disable react/no-unescaped-entities */

const Blogs = () => {
    return (
        <div>
            <h2 className="font-bold">Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <br />
            <p className="font-semibold">Access Token: <span>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.</span> </p>
            <br />
            <p className="font-semibold">Refresh Token: <span>As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</span> </p>
            <br />
            <p className="font-semibold">
                .The process works as follows:
                The client authenticates itself using a username and password or other authentication methods.
                The authentication server verifies the client's credentials and, if successful, issues an access token and a refresh token.
                The client includes the access token in its requests to the protected resource server.
                The protected resource server validates the access token to determine whether the client is authorized to access the requested resource.
                If the access token expires, the client can use the refresh token to request a new access token from the authentication server, without requiring the user to reauthenticate.
                The authentication server verifies the refresh token and, if valid, issues a new access token to the client.
                The client continues to include the new access token in its requests to access protected resources.
            </p>
            <br />
            <p>
                Store Refresh Token In Local Storage:

                When we have refresh token rotation in place, we can store tokens in local storage or browser cookiesStoring tokens in browser local storage provides persistence across page refreshes and browser tabs; however, if malicious users managed to run JavaScript in the SPA using a cross-site scripting  attack, they could retrieve the tokens stored in local storage. A vulnerability leading to a successful XSS attack could be present in the SPA source code or any third-party JavaScript code the app consumes, such as Bootstrap or Google Analytics.
                However, we can reduce the absolute token expiration time of tokens to reduce the security risks of storing tokens in local storage. This reduces the impact of a reflected XSS attack . A refresh token may have a long lifespan by configuration. However, the defined long lifespan of a refresh token is cut short with refresh token rotation. The refresh is only valid within the lifespan of the access token, which would be short-lived.
            </p>
            <br />
            <br />
            <h2 className="font-bold">Question 2: Compare SQL and NoSQL databases?</h2>
            <p>
                Type: SQL databases are primarily called Relational Databases whereas NoSQL databases are primarily called non-relational or distributed databases.
                <br />
                Language: SQL databases define and manipulate data-based structured query language. Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.Property followed
                SQL databases follow ACID properties (Atomicity, Consistency, Isolation, and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability, and Partition tolerance).
                **Great support is available for all SQL databases from their vendors. Also, a lot of independent consultants are there who can help you with SQL databases for very large-scale deployments but for some NoSQL databases you still have to rely on community support and only limited outside experts are available for setting up and deploying your large-scale NoSQL deploy
                Structure: SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases, or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.

                Property followed: SQL databases follow ACID properties (Atomicity, Consistency, Isolation, and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability, and Partition tolerance).

                Support: Great support is available for all SQL databases from their vendors. Also, a lot of independent consultants are there who can help you with SQL databases for very large-scale deployments but for some NoSQL databases you still have to rely on community support and only limited outside experts are available for setting up and deploying your large-scale NoSQL deploy.





            </p>
            <h1 className="font-bold">Question 3: What is express js? What is Nest JS?</h1>
            <p>
                Express JS: Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes
                The reason behind creating an express framework for node js is:
                <ul>
                    <li>Time-efficient</li>
                    <li>Fast </li>
                    <li>Economical</li>
                    <li>Easy to learn</li>
                    <li>Asynchronous</li>
                </ul>
            </p>
            <br />
            <p>
                Node JS:NestJS is a progressive Node. js framework that helps build server-side applications. Nest extends Node. js frameworks like Express or Fastify adding modular organization and a wide range of other libraries to take care of repetitive tasks.
            </p>
            <br />
            <h1>Question 4: What is MongoDB aggregate and how does it work?</h1>
            <br />
            <p>
                MongoDB is a database management system that allows you to store large amounts of data in documents that are held within larger structures known as collections. You can run queries on collections to retrieve a subset of documents matching given conditions, but MongoDB’s query mechanism doesn’t allow you to group or transform the returned data. This means your options for performing meaningful data analysis with MongoDB’s query mechanism alone are limited.
                <br />
                <p>MongoDB aggregate operation works:</p>
                <br />
                <ul>
                    <li>1. Data Source: The aggregate operation takes a collection as its input data source.</li>
                    <li>2. Pipeline Stages: The aggregate operation applies a series of pipeline stages to the data source. Each stage performs a specific operation on the data and passes the transformed data to the next stage in the pipeline.</li>
                    <li>3. Pipeline Operators: Each stage in the pipeline utilizes various aggregation operators to perform operations such as filtering, grouping, projecting fields, sorting, joining, calculating aggregations , and more. These operators are used to shape the data according to the desired output.</li>
                    <li>4. Data Transformation: As the data flows through the pipeline stages, it undergoes transformations based on the specified operators. For example, you can filter documents based on specific conditions, group documents by a field, calculate aggregate values within groups, sort the output, and perform other operations.</li>
                    <li>5. Final Output: After passing through all the stages in the pipeline, the aggregate operation returns the final output based on the transformations applied. The output can be a single document, multiple documents, or even a new collection.</li>
                    <li></li>
                    <li></li>
                </ul>
            </p>
        </div>
    );
};

export default Blogs;