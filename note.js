/**
 * http requests: GET | POST | PUT | PATCH | DELETE (CRUD)
 * GET: get data from server
 * POST: send data to server, create new resources
 * PUT/PATCH: update the entire data object/update certain fields
 * DELETE
 *
 * RESTful API
 *
 * Status code
 * 100 - informational responses
 * 200 - successful, OK
 * 300 - redirection
 * 400 - client error
 * 500 - server error
 *
 * ECMAScript (es6), JavaScript, NodeJS
 * ECMAScript - syntax standard
 * JavaScript - ECMAScript + WebAPI
 * NodeJS - ECMAScript + NodeAPI
 *
 *
 * DOM
 *
 * topmost tree nodes
 * children
 * sibilings/parents
 *
 * Capturing
 * Event bubbling
 *
 */

/**
 * webpack - bundler
 * babel - compiler
 *
 * PWA - progressive web app
 *
 * synthetic event
 *
 * unidirection data flow
 * props drilling
 * state lifting
 *
 *         App
 * Header       Counter
 *
 *
 * state: we can update it, managed internally, when state changes, it will trigger components to re-render
 * props: read only, managed externally, when props are changed when component re-renders, the components that are receiving the props will also re-render
 *
 * what will cause components to re-render:
 * 1. state/props update
 * 2. parent component re-render
 * 3. shouldComponentUpdate()
 * 4. forceUpdate()
 *
 * virtual DOM - tree, contains nodes (createElement())
 * copy of the real DOM
 * diffing algorithm
 * reconciliation
 *
 * HOC - higher order component
 * a function takes a component, and returns another component with additional functionalities
 *
 */
