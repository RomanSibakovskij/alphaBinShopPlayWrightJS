# alphaBinShopPlayWrightJS

PlayWright test suite on web e-commerce app functionality (user account creation, login/logout, user address addition, product(s) addition to cart, view single product info, product checkout confirmation, order cancellation). The test suite captures screenshots at the end of test case run (for logging purposes). The PlayWright also generates HTML reports at the end of each test run (to limit test suite run for a single test only, add after describe or test keyword "only" (ex. test.only / test.describe.only))

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.PlayWright 1.55 or above
 
 3.IntelliJ IDEA (or another IDE)
    
 4. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ (or other IDE) workspace folder (or wherever the project can be launched by the IDE).
2. Open the IDE and open the project folder.
3. Install Node.js.
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure PlayWright (enter in IDE terminal: npm init playwright@latest).
6. Install ESLint with cmd in IDE terminal: npm install --save-dev eslint eslint-plugin-playwright globals or npm init @eslint/config@latest
7. Run the test suite (in-terminal) on the IDE with npx playwright test (to run ESLint input in the terminal: npx eslint)

## Test Case List

//Navigate To Signup Page Test

1.	// Test 001 -> navigate to sign up page test

//Valid User Account Creation Test

1.	// Test 002 -> valid user account creation test

//Invalid User Account Creation Test - No Singular Input

1.	// Test 002a -> invalid user account creation test - no user first name
2.	// Test 002b -> invalid user account creation test - no user last name
3.	// Test 002c -> invalid user account creation test - no user email
4.	// Test 002d -> invalid user account creation test - no user password

//Invalid User Account Creation Test - Too Short Singular Input

1.	// Test 002e -> invalid user account creation test - too short user first name (1 char) (the error wasn't triggered, test has failed)
2.	// Test 002f -> invalid user account creation test - too short user last name (1 char) (the error wasn't triggered, test has failed)
3.	// Test 002g -> invalid user account creation test - too short user email (1 char -> name, domain) (the error wasn't triggered, test has failed)
4.	// Test 002h -> invalid user account creation test - too short user password (5 chars)

//Invalid User Account Creation Test - Too Long Singular Input

1.	// Test 002i -> invalid user account creation test - too long user first name (100 chars) (the error wasn't triggered, test has failed)
2.	// Test 002j -> invalid user account creation test - too long user last name (100 chars) (the error wasn't triggered, test has failed)
3.	// Test 002k -> invalid user account creation test - too long user email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
4.	// Test 002l -> invalid user account creation test - too long user password (35 chars) (the error wasn't triggered, test has failed)

//Invalid User Account Creation Test - Invalid Singular Input Format

1.	// Test 002m -> invalid user account creation test - invalid user first name format (special symbols only) (the error wasn't triggered, test has failed)
2.	// Test 002n -> invalid user account creation test - invalid user last name format (special symbols only) (the error wasn't triggered, test has failed)
3.	// Test 002o -> invalid user account creation test - invalid user email (missing '@')
4.	// Test 002p -> invalid user account creation test - existing user email (used beforehand in manual testing)
5.	// Test 002q -> invalid user account creation test - invalid user password format (lowercase only) (the error wasn't triggered, test has failed)

//Valid User Login Tests

1.	// Test 003 -> valid user login test
2.	// Test 003a -> valid user login with edited email test
3.	// Test 003b -> valid user login with edited password test

//Invalid User Login Tests - No Singular Input

1.	// Test 003c -> invalid user login test - no login email
2.	// Test 003d -> invalid user login test - no login password

//Invalid User Login Tests - Invalid Singular Input

1.	// Test 003e -> invalid user login test - invalid login email
2.	// Test 003f -> invalid user login test - invalid login email format (missing '@')
3.	// Test 003g -> invalid user login test - invalid login password

//Valid User Logout Test

1.	// Test 004 -> valid user logout test

//Valid Edit User Account Info Test

1.	// Test 005 -> valid edit user account info test (the app fails to update first name, test has failed)

//Invalid Edit User Account Info Tests - No Singular Input

1.	// Test 005a -> invalid edit user account info test - no edited first name
2.	// Test 005b -> invalid edit user account info test - no edited last name
3.	// Test 005c -> invalid edit user account info test - no edited phone (this input field is optional)

//Invalid Edit User Account Info Tests - Too Short Singular Input

1.	// Test 005d -> invalid edit user account info test - too short edited first name (1 char) (the error wasn't triggered, test has failed)
2.	// Test 005e -> invalid edit user account info test - too short edited last name (1 char) (the error wasn't triggered, test has failed)
3.	// Test 005f -> invalid edit user account info test - too short edited phone (9 digits)

//Invalid Edit User Account Info Tests - Too Long Singular Input

1.	// Test 005g -> invalid edit user account info test - too long edited first name (100 char) (the error wasn't triggered, test has failed)
2.	// Test 005h -> invalid edit user account info test - too long edited last name (100 chars) (the error wasn't triggered, test has failed)
3.	// Test 005i -> invalid edit user account info test - too long edited phone (11 digits) (the error wasn't triggered, test has failed)

//Invalid Edit User Account Info Tests - Invalid Singular Input Format

1.	// Test 005j -> invalid edit user account info test - invalid edited first name (special symbols only) (the error wasn't triggered, test has failed)
2.	// Test 005k -> invalid edit user account info test - invalid edited last name format (special symbols only) (the error wasn't triggered, test has failed)
3.	// Test 005l -> invalid edit user account info test - invalid edited phone (special symbols only) (the error wasn't triggered, test has failed)

//Valid Edit User Account Password Test

1.	// Test 006 -> valid edit user account password test

//Invalid Edit User Account Password Test - No Singular Input

1.	// Test 006a -> invalid edit user account password test - no confirm password

//Invalid Edit User Account Password Test - Too Short Input

1.	// Test 006b -> invalid edit user account password test - too short new/confirm password (7 chars)

//Invalid Edit User Account Password Test - Too Long Input

1.	// Test 006c -> invalid edit user account password test - too long new/confirm password (35 chars) (the error wasn't triggered, test has failed)

//Invalid Edit User Account Password Test - Invalid Singular Input

1.	// Test 006d -> invalid edit user account password test - mismatching confirm password

//Valid Add User Address Tests

1.	// Test 007 -> valid add user address test
2.	// Test 007a -> add second user address test

//Update User Address Test

1.	// Test 007b -> update user address test

//Invalid Add User Address Tests - No Singular Input

1.	// Test 007c -> invalid add user address test - no address full name
2.	// Test 007d -> invalid add user address test - no address email
3.	// Test 007e -> invalid add user address test - no address street
4.	// Test 007f -> invalid add user address test - no address city
5.	// Test 007g -> invalid add user address test - no address state
6.	// Test 007h -> invalid add user address test - no address country
7.	// Test 007i -> invalid add user address test - no address post code

//Invalid Add User Address Tests - Too Short Singular Input

1.	// Test 007j -> invalid add user address test - too short address full name (3 chars) (the error wasn't triggered, test has failed)
2.	// Test 007k -> invalid add user address test - too short address email (1 char -> name, domain) (the error wasn't triggered, test has failed)
3.	// Test 007l -> invalid add user address test - too short address street (3 chars) (the error wasn't triggered, test has failed)
4.	// Test 007m -> invalid add user address test - too short address city (1 char) (the error wasn't triggered, test has failed)
5.	// Test 007n -> invalid add user address test - too short address state (1 char) (the error wasn't triggered, test has failed)
6.	// Test 007o -> invalid add user address test - too short address country (1 char) (the error wasn't triggered, test has failed)
7.	// Test 007p -> invalid add user address test - too short address post code (4 digits) (the error wasn't triggered, test has failed)

//Invalid Add User Address Tests - Too Long Singular Input

1.	// Test 007q -> invalid add user address test - too long address full name (201 chars) (the error wasn't triggered, test has failed)
2.	// Test 007r -> invalid add user address test - too long address email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
3.	// Test 007s -> invalid add user address test - too long address street (100 chars) (the error wasn't triggered, test has failed)
4.	// Test 007t -> invalid add user address test - too long address city (100 chars) (the error wasn't triggered, test has failed)
5.	// Test 007u -> invalid add user address test - too long address state (100 chars) (the error wasn't triggered, test has failed)
6.	// Test 007v -> invalid add user address test - too long address country (100 chars) (the error wasn't triggered, test has failed)
7.	// Test 007w -> invalid add user address test - too long address post code (6 digits) (the error wasn't triggered, test has failed)

//Invalid Add User Address Tests - Invalid Singular Input Format

1.	// Test 007x -> invalid add user address test - invalid address full name format (special symbols only) (the error wasn't triggered, test has failed)
2.	// Test 007y -> invalid add user address test - invalid address email format (missing '@')
3.	// Test 007z -> invalid add user address test - invalid address street format (special symbols only) (the error wasn't triggered, test has failed)
4.	// Test 007aa -> invalid add user address test - invalid address city format (special symbols only) (the error wasn't triggered, test has failed)
5.	// Test 007ab -> invalid add user address test - invalid address state format (special symbols only) (the error wasn't triggered, test has failed)
6.	// Test 007ac -> invalid add user address test - invalid address country format (special symbols only) (the error wasn't triggered, test has failed)
7.	// Test 007ad -> invalid add user address test - invalid address post code format (special symbols only) (the error wasn't triggered, test has failed)

//Remove User Address Test

1.	// Test 008 -> remove user address test

//Add Single Featured Product To Cart Tests

1.	// Test 009 -> add single featured product ("Dell XPS 13 (2021) Laptop") to cart test (as a guest)
2.	// Test 009a -> add single featured product ("Epson EF-100 Smart Portable Projector") to cart test (as a registered user)

//Add Multiple Featured Products To Cart Tests

1.	// Test 009b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to cart test (as a guest)
2.	// Test 009c -> add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to cart test (as a registered user)

//Add Single New Arrivals Product To Cart Tests

1.	// Test 010 -> add single new arrivals product ("Seagate 4TB External Hard Drive") to cart test (as a guest)
2.	// Test 010a -> add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to cart test (as a registered user)

//Add Multiple New Arrivals Products To Cart Tests

1.	// Test 010b -> add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to cart test (as a guest)
2.	// Test 010c -> add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to cart test (as a registered user)

//Remove Single Product From Cart Modal Test

1.	// Test 011 -> remove single featured product ("Dell XPS 13 (2021) Laptop") from cart modal test (as a guest)

//Add Single Featured Product To Wishlist Tests

1.	// Test 012 -> add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test (as a guest)
2.	// Test 012a -> add single featured product ("Dell XPS 13 (2021) Laptop") to wishlist test (as a registered user)

//Add Multiple Featured Products To Wishlist Tests

1.	// Test 012b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") to wishlist test (as a guest)
2.	// Test 012c -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") to wishlist test (as a registered user)

//Remove Featured Product From Wishlist Test

1.	// Test 013 -> remove featured product ("Dell XPS 13 (2021) Laptop") from wishlist test (as a guest)

//Add Single Featured Product From Wishlist To Cart Tests

1.	// Test 014 -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a guest)
2.	// Test 014a -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to cart test (as a registered user)

//Add Multiple Featured Products From Wishlist To Cart Tests

1.	// Test 014b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to cart test (as a guest)
2.	// Test 014c -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to cart test (as a registered user)

//Add All Products Dashboard Page Single Product To Cart Tests

1.	// Test 015 -> add all products dashboard page single product ("Rode NT1-A Condenser Mic") to cart test (as a guest)
2.	// Test 015a -> add all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") to cart test (as a registered user)

//Add All Products Dashboard Page Multiple Products To Cart Tests

1.	// Test 015b -> add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to cart test (as a guest)
2.	// Test 015c -> add all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") to cart test (as a registered user)

//Add Product Review Tests

1.	// Test 016 -> add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)
2.	// Test 016a -> add product ("Samsung 32-inch UHD 4K Smart TV") review test (as a registered user)

//Invalid Add Product Review Tests - No Singular Input

1.	// Test 016b -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review full name (the React error was triggered)
2.	// Test 016c -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review email (the React error was triggered)
3.	// Test 016d -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review stars (the error wasn't triggered but the missing review stars input wasn't permitted)
4.	// Test 016e -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review title (the React error was triggered)
5.	// Test 016f -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - no guest review (the React error was triggered)

//Invalid Add Product Review Tests - Too Short Singular Input

1.	// Test 016g -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review full name (3 chars) (the error wasn't triggered, test has failed)
2.	// Test 016h -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review email (1 char -> name, domain) (the error wasn't triggered, test has failed)
3.	// Test 016i -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review title (1 char) (the error wasn't triggered, test has failed)
4.	// Test 016j -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too short guest review (9 chars)

//Invalid Add Product Review Tests - Too Long Singular Input

1.	// Test 016k -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review full name (201 chars) (the error wasn't triggered, test has failed)
2.	// Test 016l -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review email (100 chars -> name, domain) (the React error was triggered)
3.	// Test 016m -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review title (100 chars) (the error wasn't triggered, test has failed)
4.	// Test 016n -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - too long guest review (10001 chars) (the error wasn't triggered, test has failed)

//Invalid Add Product Review Tests - Invalid Singular Input Format

1.	// Test 016o -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review full name format (special symbols only) (the error wasn't triggered, test has failed)
2.	// Test 016p -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review email format (missing '@') (the React error was triggered)
3.	// Test 016q -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review title format (special symbols only) (the error wasn't triggered, test has failed)
4.	// Test 016r -> invalid add product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) - invalid guest review format (special symbols only) (the error wasn't triggered, test has failed)

//Update Product Review Test

1.	// Test 017 -> update product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest)

//Remove Product Review Test

1.	// Test 018 -> remove product ("Apple iPad Air (2022, 5th Gen)") review test (as a guest) (the link click doesn't appear to do anything (in automation run), test has failed)

//Add Single Featured Product To Checkout Tests

1.	// Test 019 -> add single featured product ("Dell XPS 13 (2021) Laptop") to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 019a -> add single featured product ("Epson EF-100 Smart Portable Projector") to check out test (as a registered user)

//Add Multiple Featured Products To Checkout Tests

1.	// Test 019b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer") to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 019c -> add multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") to check out test (as a registered user)

//Add Single New Arrivals Product To Checkout Tests

1.	// Test 020 -> add single new arrivals product ("Seagate 4TB External Hard Drive") to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 020a -> add single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") to check out test (as a registered user)

//Add Multiple New Arrivals Products To Checkout Tests

1.	// Test 020b -> add multiple new arrivals products ("GoPro HERO10 Black", "Logitech MX Master 3 Wireless Mouse") to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 020c -> add multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") to check out test (as a registered user)

//Add All Products Dashboard Page Single Product To Checkout Tests

1.	// Test 021 -> add all products dashboard page single product ("Rode NT1-A Condenser Mic") to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 021a -> add all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") to check out test (as a registered user)

//Add All Products Dashboard Page Multiple Products To Checkout Tests

1.	// Test 021b -> add all products dashboard page multiple products ("Seagate 4TB External Hard Drive") to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 021c -> add all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") to check out test (as a registered user)

//Add Single Featured Product From Wishlist To Checkout Tests

1.	// Test 022 -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 022a -> add single featured product ("Dell XPS 13 (2021) Laptop") from wishlist to check out test (as a registered user)

//Add Multiple Featured Products From Wishlist To Checkout Tests

1.	// Test 022b -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to check out test (as a guest) (the user account is required, test has failed)
2.	// Test 022c -> add multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist to check out test (as a registered user)

//Update Product Quantity In Shopping Cart Page Test

1.	// Test 023 -> update featured product ("Dell XPS 13 (2021) Laptop") quantity in shopping cart page test (as a guest)

//Remove Featured Product From Shopping Cart Page Test

1.	// Test 024 -> remove featured product ("Dell XPS 13 (2021) Laptop") from shopping cart page test (as a guest)

//Single Featured Product Checkout Confirmation Test

1.	// Test 025 -> single featured product ("Epson EF-100 Smart Portable Projector") (cash on delivery) check out confirmation test (as a registered user)

//Multiple Featured Products Checkout Confirmation Test

1.	// Test 025a -> multiple featured products ("Rode NT1-A Condenser Mic", "JBL Charge 4 Bluetooth Speaker") (credit card method) check out confirmation test (as a registered user)

//New Arrivals Product Checkout Confirmation Test

1.	// Test 026 -> single new arrivals product ("SanDisk Ultra Dual Drive 32GB USB 3.0") (debit card method) check out confirmation test (as a registered user)

//Multiple New Arrivals Products Checkout Confirmation Test

1.	// Test 026a -> multiple new arrivals products ("TP-Link Archer AX73 Wi-Fi 6 Router", "Apple iPad Air (2022, 5th Gen)") (net banking - AXIS) check out confirmation test (as a registered user)

//All Products Dashboard Page Single Product Checkout Confirmation Test

1.	// Test 027 -> all products dashboard page single product ("Apple iPad Air (2022, 5th Gen)") check out confirmation test (cash on delivery method) (as a registered user)

//All Products Dashboard Page Multiple Products Checkout Confirmation Test

1.	// Test 027a -> all products dashboard page multiple products ("Samsung 32-inch UHD 4K Smart TV") check out confirmation test (cash on delivery) (as a registered user)

//Single Featured Product From Wishlist Checkout Confirmation Test

1.	// Test 028 -> single featured product ("Dell XPS 13 (2021) Laptop") from wishlist check out confirmation test (credit card method) (as a registered user)

//Multiple Featured Products From Wishlist Checkout Confirmation Test

1.	// Test 028a -> multiple featured products ("SanDisk Extreme Pro 3.0 USB-C Memory Card Reader", "HP LaserJet Pro MFP M428fdw Wireless Printer", "Epson EF-100 Smart Portable Projector") from wishlist check out confirmation test (debit card method) (as a registered user)

//Invalid Single Featured Product Checkout Confirmation Tests - No Singular Input

1.	// Test 029 -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address full name
2.	// Test 029a -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address email
3.	// Test 029b -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address city
4.	// Test 029c -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address state (the error wasn't triggered, test has failed)
5.	// Test 029d -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address
6.	// Test 029e -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address post code
7.	// Test 029f -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no shipping address country (the error wasn't triggered, test has failed)
8.	// Test 029g -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no credit card number
9.	// Test 029h -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no credit card name (the error wasn't triggered, test has failed)
10.	// Test 029i -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no credit card expiration month
11.	// Test 029j -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no credit card expiration year
12.	// Test 029k -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - no credit card CVV number (after click "Place order", exp month disappears, triggering the error as well)

//Invalid Single Featured Product Checkout Confirmation Tests - Too Short Singular Input

//important note: even though the errors weren't triggered, changes don't apply to shipping address

1.	// Test 029l -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address full name (3 chars) (the error wasn't triggered, test has failed)
2.	// Test 029m -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address email (1 char -> name, domain) (the error wasn't triggered, test has failed)
3.	// Test 029n -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address city (2 chars) (the error wasn't triggered, test has failed)
4.	// Test 029o -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address state (1 char) (the error wasn't triggered, test has failed)
5.	// Test 029p -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address (3 chars) (the error wasn't triggered, test has failed)
6.	// Test 029q -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address post code (4 digits) (the error wasn't triggered, test has failed)
7.	// Test 029r -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short shipping address country (1 char) (the error wasn't triggered, test has failed)
8.	// Test 029s -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short credit card number (15 digits)
9.	// Test 029t -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short credit card name (3 chars) (the error wasn't triggered, test has failed)
10.	// Test 029u -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short credit card expiration month (1 digit) (the error wasn't triggered, test has failed(during manual testing it does get triggered))
11.	// Test 029v -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short credit card expiration year (1 digit) (the error was triggered but the input disappears after "Place order" button click)
12.	// Test 029x -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too short credit card CVV number (2 digits) (the error was triggered but the input disappears after "Place order" button click)

//Invalid Single Featured Product Checkout Confirmation Tests - Too Long Singular Input

//important note: even though the errors weren't triggered, changes don't apply to shipping address

1.	// Test 029y -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address full name (201 chars) (the error wasn't triggered, test has failed)
2.	// Test 029z -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address email (100 chars -> name, domain) (the error wasn't triggered, test has failed)
3.	// Test 029aa -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address city (100 chars) (the error wasn't triggered, test has failed)
4.	// Test 029ab -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address state (100 chars) (the error wasn't triggered, test has failed)
5.	// Test 029ac -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping address (100 chars) (the error wasn't triggered, test has failed)
6.	// Test 029ad -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping post code (6 digits) (the error wasn't triggered, test has failed)
7.	// Test 029ae -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long shipping country (100 chars) (the error wasn't triggered, test has failed)
8.	// Test 029af -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card number (17 digits) (the error was triggered but the input was removed after "Place order" button click)
9.	// Test 029ag -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card name (201 chars) (the error wasn't triggered, test has failed)
10.	// Test 029ah -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card expiration month (3 digits) (the error was triggered but the input form doesn't allow 3-digit input)
11.	// Test 029ai -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card expiration year (3 digits) (the error was triggered but the input form doesn't allow 3-digit input)
12.	// Test 029aj -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - too long credit card CVV number (4 digits) (the error was triggered but the input form doesn't allow 4-digit input)

//Invalid Single Featured Product Checkout Confirmation Tests - Invalid Singular Input

//important note: even though the errors weren't triggered, changes don't apply to shipping address

1.	// Test 029ak -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address full name format (special symbols only) (the error wasn't triggered, test has failed)
2.	// Test 029al -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address email format (missing '@')
3.	// Test 029am -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address city format (special symbols only) (the error wasn't triggered, test has failed)
4.	// Test 029an -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address state format (special symbols only) (the error wasn't triggered, test has failed)
5.	// Test 029ao -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping address format (special symbols only) (the error wasn't triggered, test has failed)
6.	// Test 029ap -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping post code format (special symbols only) (the error wasn't triggered, test has failed)
7.	// Test 029aq -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid shipping country format (special symbols only) (the error wasn't triggered, test has failed)
8.	// Test 029ar -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid credit card number format (special symbols only) (the input field doesn't allow invalid input)
9.	// Test 029as -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid credit card name format (special symbols only) (the error wasn't triggered, test has failed)
10.	// Test 029at -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid credit card expiration month format (special symbols only) (the input field doesn't allow invalid input)
11.	// Test 029au -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid credit card expiration year format (special symbols only) (the input field doesn't allow invalid input)
12.	// Test 029av -> invalid single featured product ("Epson EF-100 Smart Portable Projector") check out confirmation test (as a registered user) - invalid credit card CVV number format (special symbols only) (the input field doesn't allow invalid input)

//Product Order Cancellation Test

//the output will be the same for other products so only this one is being tested to avoid redundancy

1.	// Test 030 -> product ("Epson EF-100 Smart Portable Projector") (cash on delivery) order cancellation test (as a registered user)
