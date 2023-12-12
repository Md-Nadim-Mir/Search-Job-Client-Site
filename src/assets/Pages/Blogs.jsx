

const Blogs = () => {
    return (

        <div className="mx-10 my-10 grid grid-cols-1 gap-y-3">

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl text-[#9462F9] font-medium">
                    What is an access token and refresh token? How do they work and where should we
                    store them on the client-side?

                </div>
                <div className="collapse-content">
                    <p className="text-[#80107B] font-semibold">An access token is a short-lived credential used to access protected resources on behalf of a user in an OAuth 2.0 authentication process. It grants limited permissions and has an expiration time. A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It's used to maintain continuous access without requiring the user to log in again.<br/><br/>

                        Access tokens should be stored on the client-side, typically in memory, and used for making API requests. They should be kept secure, but they are not as sensitive as refresh tokens.

                        Refresh tokens should be securely stored on the client-side, but with extra precautions. They should never be exposed to the client-side JavaScript code directly. Instead, they are typically stored in an HTTP-only cookie or other secure storage mechanisms to prevent access by malicious scripts.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl text-[#9462F9] font-medium">
                What is express js? What is Nest JS ?

                </div>
                <div className="collapse-content">
                    <p className="text-[#80107B] font-semibold">Express.js is a popular web application framework for Node.js known for its minimalistic and flexible nature. It simplifies server-side development by providing a set of features for routing, middleware, and handling HTTP requests and responses. Express allows developers to create web and API applications with ease, and it's widely used in the Node.js ecosystem. Its unopinionated nature means developers can choose additional libraries and tools to suit their specific needs, making it suitable for a variety of projects.<br/><br/>NestJS, on the other hand, is a full-featured Node.js framework designed for building efficient and scalable server-side applications. It is built on top of Express.js but introduces a more structured and opinionated architecture. NestJS advocates for the use of TypeScript and leverages decorators to define modules, controllers, and services. The framework offers built-in support for features like dependency injection, data validation, and testing. NestJS follows a modular approach, uses decorators extensively, and provides a strongly typed system. This makes it an excellent choice for building complex applications, particularly those with a need for maintainable and scalable code, making it well-suited for enterprise-grade projects.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl text-[#9462F9] font-medium">
                 Explain your code ?

                </div>
                <div className="collapse-content">
                    <p className="text-[#80107B] font-semibold">

                        1. Home section : Adding Navbar , Footer , Banner , Job Categories , Extra two section added in home section. <br/>

                        2. Authentication : Use Firebase for Login and Registration process.<br/>

                        3. Categoris of Job : Categories of job load into all the jobs section.<br/>

                        4. Add a Job : User post a new Job into specific category.<br/>

                        5. Applied Jobs : User apply job into all category.


                    </p>
                </div>
            </div>



            
        </div>
    );
};

export default Blogs;