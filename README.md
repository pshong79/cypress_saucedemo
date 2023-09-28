## Description
This is a basic Cypress project written in JavaScript. 

The purpose of this repository to is to create some simple, basic end-to-end tests for a demo online retail site: https://www.saucedemo.com.

Before and after each test, `standard_user` is logged into and out of the site, respectively.

This covers the following workflows (more to come):

* Adding a single item into the cart
* Adding multiple items into the cart
* Removing a single item out of the cart whem multiple items are in the cart
* Removing all the item(s) out of the cart
* Checking out and completing the purchase