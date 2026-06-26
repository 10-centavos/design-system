# Implementation Contract — 10 Centavos

## 1. Purpose

Define the functional behavior, user flows, UI composition, and interaction logic of the 10 Centavos product using the Design System and Design Tokens.

This contract translates product intent into implementable, testable UI flows.

---

## 2. Scope

This contract governs:

* Core user flows
* Screen structure
* Component usage per flow
* UI states (loading, empty, error)
* Financial interactions and visualization

---

## 3. Out of Scope

This contract does NOT govern:

* Backend implementation details
* Database schema
* Authentication infrastructure (only UI behavior)
* Non-UI business logic

---

## 4. Terms and Definitions

* Flow: A sequence of user interactions to achieve a goal
* Screen: A UI state or page
* State: UI condition (loading, error, etc.)
* Template: Atomic Design screen structure that defines layout, regions, and state placement
* Page: Atomic Design screen instance with concrete content and product state
* Budget: Allocation of money into categories
* Funded: Budget category has allocated money
* Overspent: Expenses exceed allocated budget

---

## 5. Requirements

---

### Flow 1: Dashboard Overview

#### Purpose

Provide a high-level view of financial status.

#### Requirements

* The system MUST display:

  * total balance
  * total income
  * total expenses
  * budget status summary

* The system MUST use:

  * `card` components for sections
  * `numeric.typography` for values
  * semantic colors for financial states

* The dashboard MUST be composed as an Atomic Design page using template regions, organism-level panels, molecule-level financial rows/cards, and atom-level controls.

#### States

* Loading:

  * skeleton cards
* Empty:

  * onboarding message
* Error:

  * error card with retry action

---

### Flow 2: Budget Management

#### Purpose

Allow users to allocate and track budget categories.

#### Requirements

* The system MUST allow users to:

  * create categories
  * assign amounts
  * view remaining balance

* The system MUST display:

  * progress bars per category
  * status:

    * funded
    * partial
    * empty
    * overspent

#### UI Composition

* Category row MUST include:

  * name
  * allocated amount
  * spent amount
  * progress bar
  * status badge

* Budget management MUST compose molecule-level category rows inside organism-level budget regions.

#### States

* Overspent:

  * MUST use danger color
* Funded:

  * MUST use success color

---

### Flow 3: Transaction List

#### Purpose

Display and manage financial transactions.

#### Requirements

* The system MUST display:

  * transaction list
  * amount
  * category
  * date

* The system MUST:

  * differentiate income vs expense visually
  * align numeric values to the right

#### UI Composition

* Each transaction MUST use:

  * list item component
  * badge for category
  * color-coded amount

* Transaction lists MUST compose transaction molecules inside organism-level list regions.

#### States

* Empty:

  * "no transactions yet"
* Loading:

  * skeleton list
* Error:

  * retry option

---

### Flow 4: Add Transaction

#### Purpose

Allow users to create a new transaction.

#### Requirements

* The system MUST allow:

  * amount input (numeric)
  * category selection
  * type (income / expense)

* The system MUST:

  * validate required fields
  * prevent submission when invalid

#### UI Composition

* Form MUST include:

  * input fields
  * select dropdown
  * primary button

* Add transaction forms MUST compose atom-level fields and buttons into a form organism.

#### States

* Loading:

  * button in loading state
* Error:

  * inline validation messages

---

### Flow 5: Financial Goals

#### Purpose

Track savings goals.

#### Requirements

* The system MUST allow:

  * creation of goals
  * progress tracking

* The system MUST display:

  * progress bar
  * target vs current amount

#### UI Composition

* Goal card MUST include:

  * title
  * progress
  * percentage
  * status

* Financial goals MUST compose goal molecules inside goal-list organisms.

#### States

* Completed:

  * success color
* In progress:

  * brand color

---

## 6. Constraints

* All UI MUST use Design System components
* All screens MUST follow the Atomic Design composition model
* All styling MUST use Design Tokens
* All numeric values MUST use numeric typography
* All flows MUST support:

  * loading
  * empty
  * error

---

## 7. Decisions

### Decision: Flow-Based Implementation

* Rationale: Aligns product behavior with user intent.

### Decision: Explicit UI States

* Rationale: Improves UX clarity and robustness.

### Decision: Financial Semantics Everywhere

* Rationale: Core product differentiation.

---

## 8. Validation

* [ ] All flows implemented
* [ ] Components used correctly
* [ ] Financial states correctly represented
* [ ] UI states implemented (loading, empty, error)
* [ ] Forms validated
* [ ] Numeric values formatted correctly

---

## 9. Completion Criteria

This contract is satisfied when:

* All defined flows are implemented

* UI matches design system rules

* User can complete all core actions:

  * view dashboard
  * manage budget
  * add transactions
  * track goals

* UI passes validation checklist

---

## 10. Change Control

* New flows MUST be added to this contract before implementation.
* Changes MUST be approved by Product + Design.
* Breaking UX changes MUST include updated validation criteria.
