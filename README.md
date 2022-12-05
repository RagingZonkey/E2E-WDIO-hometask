## Description

A submission for the homework task following the "E2E" lecture.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/RagingZonkey/E2E-WDIO-hometask.git test-project
```

`cd` into the project directory:

```bash
cd test-project
```

Set up dependencies:

```bash
yarn install
```

Run the test suite:

```bash
yarn wdio
```

## Reasoning for addiotional scenario choice

#### Due to the fact that, according to the software testing pyramid, the amount of E2E tests should be very limited and strongly specified matching the most vital business needs, so that after completing the testing lifecycle stakeholders can be confident about the scenarios which are going to be the most profitable ones to be stable and the processes to be sound. So, from my point of view, in the case with Newegg the most crucial parts of user experience are interacting with the shopping cart and choosing the right products through well aligned categories which were basically covered within my test suite.
