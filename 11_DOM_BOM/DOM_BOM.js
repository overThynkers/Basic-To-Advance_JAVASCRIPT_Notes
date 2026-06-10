//! ==========================================================
//! DOM AND BOM - CONCEPTUAL OVERVIEW
//! ==========================================================

// * DOCUMENT OBJECT MODEL (DOM)
// ? 1- The DOM is a child/part of the Window object. It represents the
// ?    HTML document as a tree structure of nodes and objects.
// ? 2- To use the DOM, we must reference the 'document' object (or
// ?    window.document). This is the entry point for all DOM operations.
// ? 3- Document is just an object of the global Window object, which
// ?    specifically deals with the HTML elements, their content, and
// ?    their structure within the webpage. Everything inside <html>
// ?    tags is accessed through the DOM.

// * DOM Properties & Methods
// ? Core methods for selecting HTML elements from the document:

// getElementById(id)
// ? Finds and returns a SINGLE element by its unique ID attribute.
// ? Example: document.getElementById("header") returns the element with id="header".
// ? Returns null if no element with that ID exists. Fastest selection method.

// getElementsByClassName(className)
// ? Returns a LIVE HTMLCollection of all elements with the specified class.
// ? Example: document.getElementsByClassName("btn") returns all elements with class="btn".
// ? Live means the collection auto-updates when DOM changes.

// getElementsByTagName(tagName)
// ? Returns a LIVE HTMLCollection of all elements with the specified HTML tag.
// ? Example: document.getElementsByTagName("p") returns all <p> elements.
// ? Use "*" to get ALL elements in the document.

// querySelector(selector)
// ? Returns the FIRST element that matches any valid CSS selector.
// ? Example: document.querySelector(".container > p:first-child")
// ? More flexible than getElementById. Returns null if no match.

// querySelectorAll(selector)
// ? Returns a STATIC NodeList of ALL elements matching the CSS selector.
// ? Example: document.querySelectorAll("div.note, div.alert")
// ? Static means it does NOT update when DOM changes.

// innerHTML
// ? Gets or sets the HTML content INSIDE an element (as a string).
// ? Getting: Returns serialized HTML of all child elements.
// ? Setting: Replaces ALL children with parsed HTML from the string.
// ? Warning: Can cause XSS vulnerabilities if used with untrusted content.

// textContent
// ? Gets or sets the text content of an element and ALL its descendants.
// ? Getting: Returns concatenated text, ignoring HTML tags (clean text).
// ? Setting: Replaces children with a single text node (safe, no HTML parsing).
// ? Unlike innerHTML, it does NOT parse HTML - treats everything as text.

// style
// ? Gets or sets the INLINE CSS styles on an element.
// ? Properties are camelCase: element.style.backgroundColor = "red".
// ? Only affects inline styles, not styles from stylesheets or <style> tags.
// ? Use getComputedStyle() to read actual applied styles.

// Etc...
// ? Other important DOM properties/methods:
// ? - createElement(tagName): Creates a new HTML element.
// ? - appendChild(node): Adds a child element.
// ? - removeChild(node): Removes a child element.
// ? - addEventListener(event, callback): Attaches event handlers.
// ? - getAttribute(name) / setAttribute(name, value): Attribute management.
// ? - classList: Granular class manipulation (add, remove, toggle, contains).
// ? - parentNode / children / siblings: Tree navigation properties.


// * WINDOW OBJECT
// ? 1- Window is the MAIN CONTAINER or the GLOBAL OBJECT. Any operations
// ?    related to the entire browser window are part of the Window object.
// ?    It represents the browser tab/window itself.
// ? 2- All members (objects, methods, properties) that are part of the
// ?    Window object can be accessed WITHOUT prefixing 'window'.
// ?    Example: setTimeout() instead of window.setTimeout().
// ?    Example: document instead of window.document.
// ?    The window is the global scope in browser JavaScript.
// ? 3- Window has three types of members:
// ?    A) METHODS: Functions like setTimeout(), setInterval(), alert(),
// ?       confirm(), open(), close(), scrollTo(), etc.
// ?    B) OBJECTS: Child objects like document, navigator, screen,
// ?       location, history, localStorage, console, etc.
// ?    C) PROPERTIES: Values like innerWidth, innerHeight, scrollX,
// ?       scrollY, name, devicePixelRatio, etc.

// * Window Methods Examples
// ? Functions available directly on the window object:

// setTimeout(callback, delay)
// ? Executes a function ONCE after the specified delay in milliseconds.
// ? Example: setTimeout(() => { alert("Hello"); }, 2000);
// ? Waits 2 seconds, then shows the alert. Returns a timer ID.

// setInterval(callback, interval)
// ? Executes a function REPEATEDLY at the specified interval.
// ? Example: setInterval(() => { console.log("Tick"); }, 1000);
// ? Logs "Tick" every 1 second. Returns an interval ID. Use clearInterval() to stop.

// alert(message)
// ? Displays a simple modal dialog with a message and OK button.
// ? Blocks JavaScript execution until user clicks OK.

// confirm(message)
// ? Displays a modal dialog with OK and Cancel buttons.
// ? Returns true if user clicks OK, false if Cancel.

// prompt(message, defaultValue)
// ? Displays a modal dialog asking for user text input.
// ? Returns the entered string or null if Cancel is clicked.

// open(url, target, features)
// ? Opens a new browser window or tab.
// ? Example: window.open("https://example.com", "_blank", "width=600,height=400");

// close()
// ? Closes the current browser window (only works on windows opened by script).

// scrollTo(x, y) / scrollTo(options)
// ? Scrolls the document to specified coordinates.
// ? Example: window.scrollTo({ top: 0, behavior: 'smooth' });


// * BROWSER OBJECT MODEL (BOM)
// ? The BOM (Browser Object Model) represents the BROWSER ITSELF as an
// ? object. It provides methods and properties for interacting with the
// ? browser environment - things NOT directly related to the content of
// ? a web page (which is DOM's job).

// ? The BOM has NO official standard, but most browsers implement
// ? similar features. It includes everything OUTSIDE the HTML document.

// Examples of BOM features:

// window.navigator
// ? Provides INFORMATION ABOUT THE BROWSER and operating system.
// ? navigator.userAgent: Browser's user-agent string.
// ? navigator.language: User's preferred language (e.g., "en-US").
// ? navigator.onLine: Boolean - whether browser has internet connection.
// ? navigator.geolocation: Access to device's physical location.
// ? Use case: Browser detection, language localization, offline detection.

// window.location
// ? Provides URL MANIPULATION of the current page.
// ? location.href: Full URL (can be set to navigate to new page).
// ? location.hostname: Domain name (e.g., "www.example.com").
// ? location.pathname: Path portion (e.g., "/products/page.html").
// ? location.search: Query string (e.g., "?id=123&name=test").
// ? location.reload(): Reloads the current page.
// ? location.assign(url): Navigates to a new URL.
// ? Use case: Reading URL parts, redirecting users, page refreshing.

// window.alert(message)
// ? Displays a browser-native alert dialog box.
// ? This is a BOM method because it interacts with the browser UI,
// ? not with the HTML document content itself.

// window.screen
// ? Provides information about the USER'S PHYSICAL SCREEN.
// ? screen.width: Total screen width in pixels.
// ? screen.height: Total screen height in pixels.
// ? screen.availWidth: Available width (excluding OS taskbar).
// ? screen.colorDepth: Color bit depth of the display.
// ? Use case: Responsive design calculations, display capability checks.

// window.history
// ? Provides access to the BROWSER'S SESSION HISTORY.
// ? history.back(): Goes to previous page (like back button).
// ? history.forward(): Goes to next page (like forward button).
// ? history.go(-2): Goes back 2 pages.
// ? history.pushState(): Adds entry to history without page reload (SPA routing).
// ? Use case: Browser navigation control, single-page app routing.

// window.localStorage / window.sessionStorage
// ? Provides CLIENT-SIDE STORAGE in the browser.
// ? localStorage: Data persists even after browser is closed.
// ? sessionStorage: Data is cleared when tab/browser is closed.
// ? Use case: Saving user preferences, form data, authentication tokens.

// window.console
// ? Provides access to the BROWSER'S DEBUGGING CONSOLE.
// ? console.log(), console.error(), console.warn(), console.table(), etc.
// ? Use case: Debugging, logging, performance measurement.

// window.open() / window.close()
// ? BROWSER WINDOW MANAGEMENT (opening/closing tabs and windows).

// Key Difference Summary:
// ? DOM deals with the CONTENT of the webpage (HTML elements, text, structure).
// ? BOM deals with the BROWSER itself (window, navigation, screen, history, location).
// ? Window is the GLOBAL object that contains both DOM (document) and BOM objects.

//! ======================================================================
//! BOM (Browser Object Model) - 100% COMPLETE REFERENCE
//! ======================================================================
//? The Browser Object Model (BOM) represents everything about the browser
//? environment that JavaScript can interact with, beyond just the webpage
//? content. The 'window' object is the global object and the entry point
//? to all BOM APIs. Every global JavaScript object, function, and variable
//? automatically becomes a member of the window object.

//! ======================================================================
//! 1. THE WINDOW OBJECT - CORE PROPERTIES
//! ======================================================================
//? The window object represents an open browser window or tab.
//? It is the global object in client-side JavaScript. All global
//? variables and functions become properties/methods of window.

// * window.self
// ? A reference to the window object itself. Identical to window.
// ? Use case: Confirming you're working with the top-level window,
// ? not a frame or popup. 'window.self === window' always returns true.

// * window.window
// ? Points back to the window object itself.
// ? Exists for consistency; 'window.window.window' works perfectly.

// * window.parent
// ? Returns the parent window of the current window if it's inside
// ? an <iframe> or <frame>. If no parent exists (top-level window),
// ? it returns the current window itself.
// ? Use case: Communicating from an iframe to its parent page.

// * window.top
// ? Returns the topmost window in the window hierarchy chain.
// ? If A contains B (iframe), and B contains C (iframe), then
// ? C.top will return A, bypassing B.
// ? Use case: Breaking out of frames, accessing the root window.

// * window.opener
// ? Returns a reference to the window that opened this current window
// ? using window.open(). Returns null if window was not opened by script.
// ? Use case: Popup window communicating back to the original page.

// * window.length
// ? Returns the number of <iframe> or <frame> elements present in
// ? the current window. Read-only property.
// ? Use case: Quickly checking how many frames are embedded.

// * window.frames
// ? Returns an array-like object containing all the <iframe> and
// ? <frame> elements in the current window. Can access by index
// ? or by name attribute. 'window.frames[0]' or 'window.frames["myFrame"]'.
// ? Use case: Iterating through or manipulating embedded frames.

// * window.name
// ? A string property that gets/sets the name of the window.
// ? Uniquely, this persists across page loads within the same tab
// ? (if the domain doesn't change).
// ? Use case: Storing session data across page navigations (old technique).

// * window.closed
// ? A boolean property that returns true if the window has been closed.
// ? Use case: Checking if a popup window is still open before trying
// ? to communicate with it.

// * window.devicePixelRatio
// ? Returns the ratio of physical pixels to CSS pixels on the device.
// ? For Retina/HiDPI displays, this returns 2. For standard displays, 1.
// ? Use case: Rendering crisp images on high-resolution screens.

// * window.isSecureContext
// ? Returns true if the page is served over HTTPS (or localhost).
// ? Many powerful APIs (geolocation, service workers) require secure context.
// ? Use case: Feature detection for security-sensitive APIs.

// * window.crossOriginIsolated
// ? Returns true if the page is cross-origin isolated, allowing use of
// ? SharedArrayBuffer. Requires specific HTTP headers from the server.
// ? Use case: Enabling high-performance parallel computation.

// * window.origin
// ? Returns the origin of the global scope (protocol + hostname + port).
// ? Read-only. 'window.origin' is equivalent to 'window.location.origin'.
// ? Use case: Security checks, constructing absolute URLs.

// * window.status
// ? (DEPRECATED) Used to set the text in the browser's status bar.
// ? Most modern browsers no longer support this for security reasons.
// ? Use case: None. Avoid using.

// * window.defaultStatus
// ? (DEPRECATED) The default message shown in the status bar.
// ? Also ignored by modern browsers.


//! ======================================================================
//! 2. WINDOW DIMENSIONS & POSITIONING
//! ======================================================================
//? These properties define the window's size, the viewport's size,
//? and the window's position relative to the user's physical screen.
//? Critical for responsive layouts and multi-window management.

// * window.innerWidth
// ? Returns the interior width of the browser window in CSS pixels,
// ? including the vertical scrollbar (if rendered). Represents the
// ? actual viewport width used for layout.
// ? Use case: JavaScript-based responsive design calculations.

// * window.innerHeight
// ? Returns the interior height of the browser window in CSS pixels,
// ? including horizontal scrollbars. Represents the viewport height.
// ? Use case: Dynamically sizing elements to fill the viewport.

// * window.outerWidth
// ? Returns the full width of the entire browser application window,
// ? including window borders, toolbars, and the browser's UI chrome.
// ? Use case: Analytics (tracking user's screen real estate usage).

// * window.outerHeight
// ? Returns the full height of the entire browser application window,
// ? including all toolbars, tabs, bookmarks bars, and OS window borders.
// ? Use case: Determining if the user has a short or tall browser window.

// * window.screenX / window.screenLeft
// ? The distance in CSS pixels from the left edge of the user's physical
// ? screen to the left edge of the browser window. Both are aliases.
// ? Use case: Multi-window layout management (e.g., arranging popups).

// * window.screenY / window.screenTop
// ? The distance from the top edge of the user's physical screen to
// ? the top edge of the browser window. Both return the same value.
// ? Use case: Ensuring popup windows are positioned on visible screen area.

// * window.scrollX / window.pageXOffset
// ? The number of pixels the document has been scrolled horizontally.
// ? Both are aliases for the same value. Read-only.
// ? Use case: Implementing parallax effects, lazy-loading.

// * window.scrollY / window.pageYOffset
// ? The number of pixels the document has been scrolled vertically.
// ? Both are identical. 'scrollY' is newer and more intuitive.
// ? Use case: "Back to Top" button visibility, infinite scrolling.


//! ======================================================================
//! 3. WINDOW METHODS - DIALOGS & USER INTERACTION
//! ======================================================================
//? These methods create simple, built-in browser dialogs.
//? They are synchronous and block JavaScript execution until dismissed.
//? They often look outdated and cannot be styled with CSS.

// * window.alert(message)
// ? Displays a modal dialog box with a specified message and an "OK" button.
// ? Execution of all JavaScript stops completely until the user clicks OK.
// ? Use case: Quick debugging or critical warnings (use consoles for debugging generally).

// * window.confirm(message)
// ? Displays a modal dialog with a message, an "OK" button, and a "Cancel" button.
// ? Returns a boolean: true if user clicks OK, false if they click Cancel or dismiss.
// ? Use case: Confirming destructive actions like "Are you sure you want to delete?".

// * window.prompt(message, defaultText)
// ? Displays a modal dialog with a text input field, OK, and Cancel.
// ? Returns the string entered by the user, or null if they hit Cancel.
// ? The 'defaultText' is shown pre-filled in the input box.
// ? Use case: Collecting simple user input without building custom forms.

// * window.print()
// ? Triggers the browser's native Print dialog, allowing the user to
// ? print the current document (or save as PDF).
// ? Use case: "Print this page" buttons.

// * window.find(aString, caseSensitive, backwards, ...)
// ? (Non-standard, mainly Firefox) Opens the browser's "Find in page"
// ? toolbar and searches for specified text. Behavior varies widely.
// ? Use case: Rare. Custom search UI is preferred.


//! ======================================================================
//! 4. WINDOW METHODS - WINDOW CONTROL
//! ======================================================================
//? These methods create, close, resize, move, and focus browser windows.
//? Most are heavily restricted by pop-up blockers and can only be used
//? on windows created by your own script.

// * window.open(url, target, windowFeatures)
// ? Opens a new browser window or tab. Returns a reference to the new Window object.
// ? 'url': The URL to load. If empty, opens a blank page.
// ? 'target': '_blank' (new tab/window), '_self' (same frame), or a custom name.
// ? 'windowFeatures': Comma-separated string like "width=400,height=300,menubar=no".
// ? Modern popup blockers will block this unless triggered by a direct user click.
// ? Use case: OAuth popups, chat windows, opening external links in controlled sizes.

// * window.close()
// ? Closes the current window. Only works reliably for windows opened
// ? via window.open(). Cannot close the main browser tab/window.
// ? Use case: "Close this window" buttons in popups.

// * window.focus()
// ? Brings the specified window to the front, giving it focus.
// ? Works best on windows your script has created.
// ? Use case: Drawing attention to an existing popup instead of opening a new one.

// * window.blur()
// ? Removes focus from the specified window, sending it to the background.
// ? Most browsers limit this to prevent annoying behavior.
// ? Use case: Rare.

// * window.moveTo(x, y)
// ? Moves the window's top-left corner to the specified screen coordinates (x, y).
// ? Only works for windows created by window.open().
// ? Use case: Arranging multi-window application layouts.

// * window.moveBy(deltaX, deltaY)
// ? Moves the window relative to its current position by the specified pixels.
// ? Positive values move right/down; negative values move left/up.
// ? Use case: Incremental window repositioning.

// * window.resizeTo(width, height)
// ? Resizes the entire browser window to the specified outer width and height.
// ? Only works for script-opened windows. Cannot set size smaller than 100x100.
// ? Use case: Optimizing popup dimensions for specific content.

// * window.resizeBy(deltaWidth, deltaHeight)
// ? Resizes the window by a relative amount in pixels, preserving position.
// ? Positive values increase size; negative values shrink the window.
// ? Use case: Incrementally expanding/collapsing a window.


//! ======================================================================
//! 5. WINDOW METHODS - TIMING & SCHEDULING
//! ======================================================================
//? These methods allow you to execute code asynchronously, either
//? after a delay, at regular intervals, or synchronized with the
//? browser's rendering pipeline. Foundational for animations and polling.

// * window.setTimeout(callback, delay, ...args)
// ? Schedules a function to be executed once after a specified delay
// ? in milliseconds. Returns a numeric timer ID.
// ? 'callback': The function to execute.
// ? 'delay': Time to wait in ms (minimum is effectively 4ms for nested timeouts).
// ? '...args': Optional arguments passed to the callback.
// ? Use case: Debouncing input, delaying UI updates, creating animations.

// * window.clearTimeout(timeoutID)
// ? Cancels a timeout previously scheduled with setTimeout(), preventing
// ? the callback from executing if it hasn't already run.
// ? Takes the timer ID returned by setTimeout() as argument.
// ? Use case: Canceling a scheduled notification when user interacts.

// * window.setInterval(callback, delay, ...args)
// ? Schedules a function to be executed repeatedly every 'delay' milliseconds.
// ? Returns a numeric interval ID. Keeps running until clearInterval() is called.
// ? Warning: If callback takes longer than delay, calls can queue up.
// ? Use case: Live clocks, polling for server updates.

// * window.clearInterval(intervalID)
// ? Stops a repeating interval created by setInterval().
// ? Takes the interval ID as argument.
// ? Use case: Stopping an auto-refresh timer.

// * window.requestAnimationFrame(callback)
// ? Tells the browser you want to perform an animation. The browser calls
// ? the specified callback right before the next repaint (usually 60fps).
// ? Automatically pauses when tab is backgrounded, saving CPU.
// ? Returns a request ID for cancellation.
// ? Use case: Smooth, optimized animations (preferred over setInterval).

// * window.cancelAnimationFrame(requestID)
// ? Cancels a previously scheduled animation frame request.
// ? Takes the ID returned by requestAnimationFrame().
// ? Use case: Stopping an animation loop.

// * window.requestIdleCallback(callback, options)
// ? Queues a function to be called when the browser's main thread is idle
// ? (not rendering or handling user input). Good for non-critical work.
// ? 'callback' receives a deadline object with timeRemaining() method.
// ? 'options.timeout': Max time to wait before executing anyway.
// ? Use case: Analytics reporting, non-critical DOM cleanup.

// * window.cancelIdleCallback(handle)
// ? Cancels a previously queued idle callback.
// ? Use case: Aborting background work if user navigates away.

// * window.queueMicrotask(callback)
// ? Queues a microtask to be executed immediately after the current task
// ? completes, but before the next macrotask (like setTimeout). Faster than timeouts.
// ? Use case: Ensuring code runs after current synchronous execution finishes.


//! ======================================================================
//! 6. WINDOW METHODS - SCROLLING
//! ======================================================================
//? Methods to programmatically scroll the document within the viewport.
//? Can be animated (smooth) or instant. Essential for single-page apps.

// * window.scroll(x, y) / window.scroll(options)
// ? Scrolls the document to a specific absolute position.
// ? Accepts either (x-coord, y-coord) or an options object:
// ? { top: number, left: number, behavior: 'auto' | 'smooth' }.
// ? Use case: Jumping to top, navigating to sections smoothly.

// * window.scrollTo(x, y) / window.scrollTo(options)
// ? Identical to window.scroll(). Both are aliases for the same underlying operation.
// ? Specifies absolute coordinates to scroll to.
// ? Use case: Programmatic scrolling after page load.

// * window.scrollBy(x, y) / window.scrollBy(options)
// ? Scrolls the document relative to its current scroll position.
// ? Positive values scroll right/down; negative values scroll left/up.
// ? Use case: "Next page" buttons, carousel pagination.

// * element.scrollIntoView(alignToTop) / element.scrollIntoView(options)
// ? Although called on an element, it's a key scrolling mechanism.
// ? Scrolls the page until the specified element is visible.
// ? 'alignToTop': Boolean (true = top of element aligns to top of viewport).
// ? 'options': { behavior: 'smooth', block: 'start'|'center'|'end' }.
// ? Use case: Navigating to a specific form validation error.


//! ======================================================================
//! 7. WINDOW EVENTS
//! ======================================================================
//? The window object fires events for various lifecycle stages,
//? user interactions, and state changes. These can be handled using
//? window.addEventListener() or by assigning to 'on' properties.

// * load (window.onload)
// ? Fires when the entire page and ALL dependent resources (stylesheets,
// ? images, frames) have completely finished loading.
// ? Use case: Initializing functionality that requires image dimensions.

// * DOMContentLoaded (document.addEventListener)
// ? Fires when the initial HTML document has been fully parsed and the
// ? DOM tree is built, without waiting for stylesheets, images, or frames.
// ? This fires much earlier than 'load'.
// ? Use case: Attaching event listeners to DOM elements (preferred over load).

// * beforeunload (window.onbeforeunload)
// ? Fires when the window/document is about to be unloaded (page refresh,
// ? navigation away, or tab close). Allows displaying a confirmation dialog.
// ? Requires setting event.returnValue or returning a string to trigger dialog.
// ? Use case: Warning users about unsaved changes.

// * unload (window.onunload)
// ? Fires when the document is being unloaded. This cannot prevent navigation.
// ? Most resources have already been cleaned up. Avoid heavy operations here.
// ? Use case: Sending final analytics beacon (use navigator.sendBeacon() here).

// * pageshow (window.onpageshow)
// ? Fires when a page is displayed, even when loaded from back/forward cache (bfcache).
// ? Receives a PageTransitionEvent with a 'persisted' boolean property.
// ? Use case: Restoring page state when user navigates back.

// * pagehide (window.onpagehide)
// ? Fires when a page is hidden (navigating away, but also to bfcache).
// ? Use case: Pausing animations/media when page goes to bfcache.

// * resize (window.onresize)
// ? Fires continuously as the browser window is being resized by the user.
// ? Fires many times per second; always debounce or throttle your handler.
// ? Use case: Recalculating responsive layout in JavaScript.

// * scroll (window.onscroll)
// ? Fires continuously as the document is scrolled. Use passive listeners
// ? or throttling to avoid performance jank.
// ? Use case: Updating sticky navigation shadows, lazy-loading images.

// * error (window.onerror)
// ? A global error handler that catches all uncaught JavaScript errors
// ? occurring in the window's scope. Receives message, source, line, column, error object.
// ? Use case: Global error logging to server-side monitoring tools.

// * unhandledrejection
// ? Fires when a Promise is rejected but has no .catch() handler attached.
// ? Receives a PromiseRejectionEvent.
// ? Use case: Catching missing error handling in async code.

// * hashchange (window.onhashchange)
// ? Fires when the fragment identifier (hash) of the URL changes.
// ? The event object contains oldURL and newURL properties.
// ? Use case: Simple routing in single-page applications.

// * popstate (window.onpopstate)
// ? Fires when the user navigates through their history (back/forward buttons).
// ? Only fires if history.pushState() or history.replaceState() were used.
// ? The event object's 'state' property contains the associated data.
// ? Use case: Advanced routing in SPAs without hash fragments.

// * online (window.ononline)
// ? Fires when the browser gains network connectivity (navigator.onLine becomes true).
// ? Use case: Displaying "Back Online" messages, syncing data.

// * offline (window.onoffline)
// ? Fires when the browser loses network connectivity (navigator.onLine becomes false).
// ? Use case: Showing offline fallback UI, queuing data locally.

// * focus (window.onfocus)
// ? Fires when the window receives focus (user switches to this tab).
// ? Use case: Pausing/restarting animations, resuming timers.

// * blur (window.onblur)
// ? Fires when the window loses focus (user switches to another tab).
// ? Use case: Pausing games, stopping auto-refreshes.

// * message (window.onmessage)
// ? Fires when the window receives a message from another context
// ? (e.g., iframe, popup, Web Worker) via postMessage().
// ? Use case: Cross-origin communication.

// * storage
// ? Fires on all other tabs/windows of the same origin when localStorage
// ? or sessionStorage is modified in one of them. Not fired in the initiating window.
// ? Use case: Syncing login state across tabs.

// * contextmenu
// ? Fires when the user attempts to open a context menu (right-click).
// ? Can be prevented with event.preventDefault().
// ? Use case: Custom right-click menus.

// * wheel
// ? Fires when the user rotates a mouse wheel (or similar pointing device).
// ? The event object includes deltaX, deltaY, deltaZ for scroll amounts.
// ? Use case: Zoom features, custom scroll experiences.

// * beforeprint / afterprint
// ? Fires immediately before and after the print dialog is opened/closed.
// ? Use case: Temporarily adjusting layout for printing.


//! ======================================================================
//! 8. SCREEN OBJECT (window.screen)
//! ======================================================================
//? The screen object provides information about the user's physical
//? screen(s) or display monitor(s). Useful for adapting to different
//? display capabilities.

// * screen.width
// ? The total width of the user's primary screen in CSS pixels.
// ? On a 1920x1080 monitor, this returns 1920.
// ? Use case: Understanding user's maximum display resolution.

// * screen.height
// ? The total height of the user's primary screen in CSS pixels.
// ? On a 1920x1080 monitor, this returns 1080.
// ? Use case: Window sizing calculations.

// * screen.availWidth
// ? The width of the screen available for the browser window, excluding
// ? OS-level elements like the Windows Taskbar or MacOS Dock.
// ? On Windows with Taskbar on bottom: 1920x1040.
// ? Use case: Positioning windows so they aren't behind taskbars.

// * screen.availHeight
// ? The height of the screen available for the browser window, excluding
// ? OS taskbars/docks/system menu bars.
// ? Use case: Calculating maximum usable window height.

// * screen.availLeft
// ? The X-coordinate of the first available pixel (not occupied by OS UI)
// ? on the left side. Usually 0 unless taskbar is docked on the left.
// ? Use case: Multi-monitor positioning calculations.

// * screen.availTop
// ? The Y-coordinate of the first available pixel at the top, usually 0
// ? unless the taskbar is docked on top.
// ? Use case: Positioning popups below system menu bars.

// * screen.colorDepth
// ? The number of bits used to represent a single color.
// ? Commonly returns 24 (True Color, 16.7 million colors) or 30.
// ? Use case: Serving lower-resolution images to lower color-depth displays (rare).

// * screen.pixelDepth
// ? The bit depth of the pixel buffer. For modern browsers, this is
// ? almost always identical to screen.colorDepth.
// ? Returns 24 on most systems.

// * screen.isExtended
// ? (Experimental) Returns true if the device has multiple screens connected
// ? and the window can be placed across them (Multi-Screen Window Placement API).
// ? Use case: Advanced multi-monitor web applications.

// * screen.orientation
// ? Returns a ScreenOrientation object that describes the current
// ? physical orientation of the device screen.
// ? Use case: Mobile/tablet responsive handling based on rotation.

// * screen.orientation.type
// ? A string indicating the orientation: "portrait-primary", "portrait-secondary",
// ? "landscape-primary", or "landscape-secondary".
// ? Use case: Locking orientation for games or video players.

// * screen.orientation.angle
// ? The current rotation angle of the screen in degrees:
// ? 0 (normal), 90 (rotated left), 180 (upside down), 270 (rotated right).
// ? Use case: Compensating for device rotation in canvas applications.

// * screen.orientation.lock(orientation)
// ? Attempts to lock the screen to a specific orientation (e.g., "portrait").
// ? Returns a Promise. Only works in fullscreen mode on most browsers.
// ? Use case: Mobile games requiring a fixed landscape orientation.

// * screen.orientation.unlock()
// ? Releases the screen orientation lock, allowing the device to freely rotate.
// ? Use case: Returning to normal behavior after a fullscreen experience.


//! ======================================================================
//! 9. NAVIGATOR OBJECT (window.navigator)
//! ======================================================================
//? The navigator object is a massive container for information about
//? the browser application, the operating system, and the device.
//? It's also the entry point for dozens of modern web APIs.

// --- 9A: Basic Browser Identity & Info ---

// * navigator.userAgent
// ? A string containing the browser's user-agent header.
// ? Example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/..."
// ? WARNING: Highly unreliable for browser detection. Use feature detection instead.
// ? Use case: Legacy support, analytics.

// * navigator.userAgentData
// ? (Modern replacement for userAgent) Returns an object with branded browser info.
// ? Contains 'brands' array (e.g., "Google Chrome", "Chromium") and 'mobile' boolean.
// ? Provides getHighEntropyValues() for detailed platform info.
// ? Use case: Reliable browser/device identification.

// * navigator.appName
// ? Always returns "Netscape" in modern browsers for historical compatibility.
// ? Completely useless for any real-world detection.

// * navigator.appVersion
// ? Another legacy string, often just part of the user-agent. Do not rely on this.

// * navigator.appCodeName
// ? Returns the internal code name of the browser. Always "Mozilla" nowadays.

// * navigator.product
// ? Returns the engine name. Historically "Gecko". Now "Gecko" everywhere.

// * navigator.productSub
// ? Returns build number/revision. Values vary. Not useful for logic.

// * navigator.vendor
// ? Returns the browser vendor name. "Google Inc." for Chrome, "" for Firefox.
// ? Use case: Very rough browser identification.

// * navigator.vendorSub
// ? Returns vendor version number. Empty in many browsers.

// * navigator.platform
// ? Returns the operating system platform string.
// ? Example: "Win32", "MacIntel", "Linux x86_64".
// ? Use case: Detecting OS for download links (e.g., showing .exe vs .dmg).

// * navigator.language
// ? Returns the user's preferred language as a BCP 47 string.
// ? Example: "en-US", "hi-IN", "ja". Represents the browser UI language.
// ? Use case: Localizing website content on first visit.

// * navigator.languages
// ? An array of the user's preferred languages in order of preference.
// ? Example: ["hi-IN", "en-US", "en"]. Useful for fallback localization.
// ? Use case: Choosing the best available translation.

// * navigator.onLine
// ? Returns a boolean: true if the browser thinks it has an internet connection,
// ? false otherwise. Not 100% reliable (can be true on captive portals).
// ? Use case: Quick connectivity check before making network requests.

// * navigator.cookieEnabled
// ? Returns true if the user has cookies enabled for the current page.
// ? Does NOT check third-party cookie blocking.
// ? Use case: Warning users if application requires cookies.

// * navigator.doNotTrack
// ? Returns the user's "Do Not Track" setting: "1" (yes), "0" (no), or "unspecified".
// ? Honor this if you respect user privacy preferences.
// ? Use case: Disabling analytics tracking.

// * navigator.maxTouchPoints
// ? Returns the maximum number of simultaneous touch contact points supported
// ? by the device. > 0 indicates a touchscreen device.
// ? Use case: Enabling touch-specific UI elements.

// * navigator.hardwareConcurrency
// ? Returns the number of logical processor cores available to the browser.
// ? Example: 8 (for a 4-core CPU with Hyper-Threading).
// ? Use case: Determining how many Web Workers to spawn for optimal performance.

// * navigator.deviceMemory
// ? (Experimental) Returns the approximate amount of device RAM in GiB.
// ? Values are limited to 0.25, 0.5, 1, 2, 4, 8. Returns undefined on non-Android.
// ? Use case: Serving lighter experiences to low-memory devices.

// * navigator.connection
// ? Returns a NetworkInformation object containing 'effectiveType' (e.g., '4g', '3g', '2g'),
// ? 'downlink' (estimated Mbps), and 'rtt' (round-trip time in ms).
// ? Use case: Adaptive loading - serving low-res images on slow connections.

// * navigator.getBattery()
// ? Returns a Promise that resolves to a BatteryManager object.
// ? Provides 'level' (0-1), 'charging' (boolean), and events for changes.
// ? Use case: Saving work before device runs out of power.

// * navigator.webdriver
// ? Returns true if the browser is being controlled by automation tools
// ? (like Selenium, Puppeteer). Used for bot detection.
// ? Use case: Security - blocking automated scraping.

// * navigator.plugins
// ? Returns a PluginArray listing installed browser plugins (e.g., PDF viewer).
// ? Most modern browsers deprecate this and hide plugin details.
// ? Use case: Legacy detection of Flash Player.

// * navigator.mimeTypes
// ? Returns a MimeTypeArray listing supported MIME types and associated plugins.
// ? Also increasingly deprecated.

// * navigator.javaEnabled()
// ? Returns true if Java applet support is enabled. Almost always false now.

// * navigator.pdfViewerEnabled
// ? Returns true if the browser has a built-in PDF viewer (Chrome, Firefox, Edge).
// ? Use case: Deciding whether to use a custom PDF renderer or let the browser handle it.

// --- 9B: Permissions & Security ---

// * navigator.permissions
// ? Returns a Permissions object. Use 'navigator.permissions.query({name: 'geolocation'})'
// ? to get a PermissionStatus object with 'state' ('granted', 'denied', 'prompt') and
// ? an 'onchange' event.
// ? Use case: Checking camera/mic/location permission before requesting.

// * navigator.credentials
// ? Returns the CredentialsContainer for the Credential Management API.
// ? Used for passwordless login with WebAuthn, password auto-fill, and federated login.
// ? Use case: Implementing fingerprint/Face ID login for websites.

// --- 9C: Clipboard & Data ---

// * navigator.clipboard
// ? Returns the Clipboard API interface. Provides async read() and write() methods
// ? requiring user permission. Much more secure than document.execCommand('copy').
// ? Use case: Custom "Copy to Clipboard" buttons.

// * navigator.clipboard.writeText(text)
// ? Writes plain text to the system clipboard. Returns a Promise.
// ? Requires 'clipboard-write' permission and secure context.
// ? Use case: Copying coupon codes.

// * navigator.clipboard.readText()
// ? Reads plain text from the clipboard. Returns a Promise. Requires 'clipboard-read'.
// ? Use case: "Paste from Clipboard" functionality.

// --- 9D: Hardware Access APIs ---

// * navigator.geolocation
// ? Returns a Geolocation object for getting the device's physical location.
// ? Uses GPS, Wi-Fi triangulation, or IP address. Requires user permission.
// ? getCurrentPosition(success, error, options) gets location once.
// ? watchPosition(success, error, options) tracks location continuously.
// ? Use case: Maps, nearby store finders, weather apps.

// * navigator.mediaDevices
// ? The entry point for accessing connected media devices.
// ? getUserMedia(constraints): Gets camera/microphone streams (returns Promise).
// ? enumerateDevices(): Lists all available media input/output devices.
// ? getDisplayMedia(): Captures the user's screen (screen sharing).
// ? Use case: Video calling, webcam snapshots, screen recording.

// * navigator.bluetooth
// ? Returns a Bluetooth object for the Web Bluetooth API.
// ? Allows web apps to connect to nearby BLE (Bluetooth Low Energy) devices.
// ? Requires secure context and user gesture.
// ? Use case: Web apps controlling heart rate monitors, LED lights.

// * navigator.usb
// ? Returns a USB object for the WebUSB API.
// ? Allows connecting to USB devices from the browser (requires drivers and permission).
// ? Use case: Firmware updates, 3D printer control from browser.

// * navigator.serial
// ? Returns a Serial object for the Web Serial API.
// ? Allows reading and writing to devices connected via serial port (RS-232, USB CDC).
// ? Use case: Programming microcontrollers (Arduino) from the browser.

// * navigator.hid
// ? Returns an HID object for the WebHID API.
// ? Allows interaction with Human Interface Devices (gamepads, keyboards, etc.) at a low level.
// ? Use case: Configuring custom gaming mice/keyboards.

// * navigator.xr
// ? Returns the entry point for the WebXR Device API (Virtual Reality & Augmented Reality).
// ? Provides isSessionSupported('immersive-vr' | 'immersive-ar') and requestSession().
// ? Use case: Immersive VR experiences, AR product try-ons.

// * navigator.getGamepads()
// ? Returns an array of Gamepad objects for all connected game controllers.
// ? Each Gamepad has 'axes' and 'buttons' arrays for real-time input state.
// ? Use case: Web-based video games.

// * navigator.vibrate(pattern)
// ? Triggers the device's vibration motor (mobile devices only).
// ? 'pattern': A single millisecond value for a one-shot, or an array for on/off pattern.
// ? Use case: Haptic feedback in web apps.

// --- 9E: Communication & Networking ---

// * navigator.share(data)
// ? Invokes the native system sharing dialog (Web Share API).
// ? Accepts { title, text, url }. Returns a Promise. Only works on mobile mostly.
// ? Use case: "Share this article" buttons that use native Android/iOS share.

// * navigator.canShare(data)
// ? Returns true if the browser thinks the provided data can be natively shared.
// ? Use case: Hiding share buttons on unsupported systems.

// * navigator.sendBeacon(url, data)
// ? A non-blocking method for sending small amounts of data reliably to a server,
// ? even when the page is unloading. Ideal for analytics.
// ? Use case: Logging final session duration during beforeunload.

// * navigator.serviceWorker
// ? Returns a ServiceWorkerContainer for the Service Worker API.
// ? register(scriptURL, options): Registers a service worker for offline support/push.
// ? ready: Promise that resolves when a service worker is active.
// ? controller: The ServiceWorker controlling the current page.
// ? Use case: Progressive Web Apps (PWAs) with offline capabilities.

// * navigator.storage
// ? Returns a StorageManager for the Storage API.
// ? estimate(): Returns { usage, quota } for current origin's storage.
// ? persist(): Requests persistent storage (data won't be auto-deleted).
// ? Use case: Displaying how much storage the app is using.

// * navigator.locks
// ? Returns a LockManager for the Web Locks API.
// ? Allows coordinating resource access across tabs/windows.
// ? request(name, callback): Acquires a named lock before running callback.
// ? Use case: Ensuring only one tab syncs data at a time.

// --- 9F: Experimental & Niche APIs ---

// * navigator.wakeLock
// ? Returns a WakeLock object. request('screen') prevents the screen from dimming/turning off.
// ? Returns a Promise with a WakeLockSentinel. Requires page visibility.
// ? Use case: Recipe apps that keep screen on while cooking.

// * navigator.virtualKeyboard
// ? Returns a VirtualKeyboard object (VirtualKeyboard API).
// ? Allows controlling the on-screen keyboard on mobile devices (show/hide, overlays).
// ? Use case: Custom chat input areas that resize properly.

// * navigator.windowControlsOverlay
// ? Returns a WindowControlsOverlay object for PWAs.
// ? Allows custom title bar layouts in installed desktop PWAs.
// ? Use case: Extending app UI into the title bar area (like VS Code).

// * navigator.keyboard
// ? Returns a Keyboard object (Keyboard Map API).
// ? Allows querying the physical keyboard layout and capturing specific keys.
// ? Use case: Games that need to know key positions physically.

// * navigator.contacts
// ? Returns a ContactsManager for the Contact Picker API.
// ? select(properties, options): Opens a native contact picker. Returns selected contacts.
// ? Use case: Inviting friends to an app, autofilling shipping addresses.

// * navigator.scheduling
// ? Returns a Scheduling object.
// ? isInputPending(): Checks if user input is waiting (React used this for scheduling).
// ? Use case: Yielding to the browser when rendering large lists.

// * navigator.ink
// ? Returns an Ink object for the Ink API.
// ? requestPresenter(): Allows drawing ink strokes in a low-latency canvas (for stylus).
// ? Use case: Drawing and note-taking applications.

// * navigator.fonts
// ? Returns a FontManager for the Font Access API.
// ? query(): Asks user to select locally installed fonts for use in the app.
// ? Use case: Photoshop-like web apps using user's installed fonts.

// * navigator.managed
// ? Returns a NavigatorManagedData for enterprise-managed browsers.
// ? Allows organizations to configure web apps remotely.
// ? Use case: Company-internal web apps on managed Chromebooks.

// * navigator.deprecatedReplaceInURN / navigator.adAuctionComponents
// ? Parts of the FLEDGE/Protected Audience API (Privacy Sandbox).
// ? Enables interest-based advertising without third-party cookies.
// ? Use case: AdTech platforms.

// * navigator.mediaCapabilities
// ? Returns a MediaCapabilities object.
// ? decodingInfo(config), encodingInfo(config): Checks if given media config plays
// ? smoothly and is power-efficient.
// ? Use case: Dynamically choosing video resolution for smooth playback.

// * navigator.presentation
// ? Returns a Presentation object for the Presentation API.
// ? Enables casting content to second screens (Chromecast, wireless displays).
// ? Use case: "Cast to TV" features in video players.

// * navigator.setAppBadge(contents) / navigator.clearAppBadge()
// ? Sets or clears a badge on the PWA's app icon (unread count).
// ? Use case: Notification badges for messaging PWAs.

// * navigator.registerProtocolHandler(scheme, url, title)
// ? Registers the web app as a handler for a specific protocol (e.g., mailto, web+myapp).
// ? Use case: Gmail registered as mailto handler.

// * navigator.unregisterProtocolHandler(scheme, url)
// ? Unregisters a custom protocol handler.

// * navigator.msSaveOrOpenBlob / msSaveBlob (Vendor Prefix)
// ? Internet Explorer/Edge legacy methods for saving blobs. Avoid in modern code.


//! ======================================================================
//! 10. LOCATION OBJECT (window.location)
//! ======================================================================
//? The location object contains all information about the current page's URL
//? and provides methods to navigate to new pages or reload.

// * location.href
// ? The entire URL as a string. Can be set to navigate the browser to a new page.
// ? Example: 'https://www.example.com:8080/path/page?q=test#section'
// ? Use case: Redirecting users, reading the current full URL.

// * location.protocol
// ? The URL scheme including the colon. Read-only.
// ? Example: 'https:', 'http:', 'file:', 'ftp:'.
// ? Use case: Checking if page is served securely.

// * location.host
// ? The hostname AND port number combined. Read-only.
// ? Example: 'www.example.com:8080'.
// ? Use case: Constructing cross-origin URLs.

// * location.hostname
// ? The domain name of the server hosting the page. Read-only.
// ? Example: 'www.example.com'.
// ? Use case: Domain validation, analytics.

// * location.port
// ? The port number as a string. Empty string if the default port is used (80/443).
// ? Example: '8080', ''.
// ? Use case: Checking for non-standard configurations.

// * location.pathname
// ? The path to the resource on the server, starting with '/'.
// ? Example: '/blog/article.html'.
// ? Use case: Highlighting current navigation item based on path.

// * location.search
// ? The query string including the leading '?'. Empty string if no query.
// ? Example: '?id=123&lang=en'.
// ? Use case: Parsing URL parameters (use URLSearchParams for easier parsing).

// * location.hash
// ? The fragment identifier including the leading '#'. Empty string if no hash.
// ? Example: '#section2'.
// ? Use case: In-page navigation, hash-based SPA routing.

// * location.origin
// ? The protocol, hostname, and port combined. Read-only.
// ? Example: 'https://www.example.com:8443'.
// ? Use case: Building absolute API endpoints without hardcoding.

// * location.ancestorOrigins
// ? A DOMStringList of origins of all ancestor browsing contexts, from parent to top.
// ? Empty if page is top-level. Helps detect iframing.
// ? Use case: Frame-busting prevention, security checks.

// * location.assign(url)
// ? Navigates to the specified URL. Adds a new entry to the browser's history,
// ? enabling the back button.
// ? Use case: Standard page navigation (identical to setting location.href).

// * location.replace(url)
// ? Navigates to the specified URL, but REPLACES the current page in history.
// ? The user cannot click "Back" to return to the previous page.
// ? Use case: Redirecting after form submission to prevent re-submission.

// * location.reload(forceGet)
// ? Reloads the current page from the browser cache. If 'forceGet' is true,
// ? it bypasses the cache and reloads from the server.
// ? Use case: Refresh buttons.

// * location.toString()
// ? Returns the location.href string. Same as reading the property.


//! ======================================================================
//! 11. HISTORY OBJECT (window.history)
//! ======================================================================
//? The history object provides an interface to the browser's session history,
//? the list of pages visited in the current tab/window.

// * history.length
// ? Returns the number of entries in the joint session history stack.
// ? An integer. Cannot be accessed if not top-level for security.
// ? Use case: Checking if there are pages to go back to.

// * history.scrollRestoration
// ? Gets/sets the scroll restoration mode: 'auto' (browser handles scroll position)
// ? or 'manual' (developer takes responsibility).
// ? Use case: SPAs that manage their own scroll positions on navigation.

// * history.state
// ? Returns the current state object associated with the history entry.
// ? This is the value passed as the first argument to pushState() or replaceState().
// ? Returns null if no state set.
// ? Use case: Restoring page state without re-requesting data.

// * history.back()
// ? Navigates to the previous page in session history (same as user clicking Back).
// ? Has no effect if already at the first page.
// ? Use case: Custom back buttons.

// * history.forward()
// ? Navigates to the next page in session history (same as user clicking Forward).
// ? Has no effect if already at the last page.
// ? Use case: Custom forward buttons.

// * history.go(delta)
// ? Navigates to a specific position in history relative to current.
// ? 'delta': Positive integer goes forward, negative goes back.
// ? history.go(-2) goes back two pages. history.go(0) reloads.
// ? Use case: Multi-step navigation shortcuts.

// * history.pushState(state, unusedTitle, url)
// ? Adds a new entry to the history stack without loading the page.
// ? 'state': Any JavaScript object associated with the new entry.
// ? 'url': The new URL to display (same origin only).
// ? This is the foundation of modern SPA routing.
// ? Use case: Changing the URL to reflect dynamic content state.

// * history.replaceState(state, unusedTitle, url)
// ? Modifies the CURRENT history entry without adding a new one.
// ? Parameters are identical to pushState().
// ? Use case: Correcting the URL if content has changed without navigation.


//! ======================================================================
//! 12. CONSOLE OBJECT (window.console)
//! ======================================================================
//? The console object provides access to the browser's debugging console.
//? Essential for logging, debugging, profiling, and monitoring.

// * console.log(message, ...args)
// ? Outputs a general-purpose message to the console. Accepts substitution
// ? strings (%s, %d, %i, %f, %o, %c for CSS styling).
// ? Use case: General debugging output.

// * console.info(message, ...args)
// ? Logs an informational message. In Chrome, shows a blue "i" icon.
// ? Semantically indicates helpful information distinct from debug data.
// ? Use case: Logging application milestones.

// * console.warn(message, ...args)
// ? Logs a warning message with a yellow exclamation icon and yellow background.
// ? The call stack is often included in the expandable output.
// ? Use case: Deprecated API usage warnings.

// * console.error(message, ...args)
// ? Logs an error message with a red error icon and red background.
// ? Includes a full stack trace by default. Critical for debugging failures.
// ? Use case: Catching and reporting runtime errors.

// * console.debug(message, ...args)
// ? Logs a debug-level message. Often hidden by default unless the user enables
// ? "Verbose" or "Debug" logging levels in the console settings.
// ? Use case: Very detailed logs needed only for deep debugging.

// * console.assert(condition, message)
// ? Logs an error message ONLY if the first argument evaluates to false.
// ? Does nothing if the condition is true. Cleaner than if(!x) console.error().
// ? Use case: Asserting expected states in development.

// * console.clear()
// ? Clears the console. In Chrome, it just prints "Console was cleared" unless
// ? the user has "Preserve log" enabled.
// ? Use case: Cleaning up console output at the start of a demo.

// * console.table(data, columns)
// ? Displays data (arrays, objects, arrays of objects) in a formatted table.
// ? 'columns': Optional array of column names to include.
// ? Use case: Visualizing structured JSON data.

// * console.count(label)
// ? Logs the number of times this line has been called with the specified label.
// ? Outputs "label: 1", "label: 2", etc.
// ? Use case: Checking how many times a function is called.

// * console.countReset(label)
// ? Resets the counter associated with 'label' back to zero.
// ? Use case: Restarting a count for a new session.

// * console.time(label)
// ? Starts a high-resolution timer associated with 'label'.
// ? Up to 10,000 simultaneous timers can run.
// ? Use case: Performance profiling a block of code.

// * console.timeLog(label)
// ? Logs the current value of the timer without stopping it.
// ? Use case: Measuring incremental stages in an operation.

// * console.timeEnd(label)
// ? Stops the timer and logs the total elapsed time.
// ? Use case: "Operation X took 123ms".

// * console.group(label) / console.groupCollapsed(label)
// ? Creates a new grouping of console messages, indenting subsequent logs.
// ? 'groupCollapsed' creates the group in a collapsed state.
// ? Use case: Structuring complex, multi-step log output.

// * console.groupEnd()
// ? Closes the most recently opened group.
// ? Use case: Ending a structured logging section.

// * console.trace(message)
// ? Logs a stack trace showing the path of function calls to the current point.
// ? Extremely useful for tracing execution flow.
// ? Use case: Answering "How did we get here?".

// * console.dir(object)
// ? Displays an interactive tree view of the specified JavaScript object's properties.
// ? Better for inspecting DOM elements than console.log.
// ? Use case: Exploring a DOM element's full property list.

// * console.dirxml(node)
// ? Displays an XML/HTML element tree representation of the specified node.
// ? Use case: Viewing DOM structure in code flow.

// * console.profile(label) / console.profileEnd(label)
// ? Starts/Stops a CPU profile recording in the browser's performance tool.
// ? Use case: Programmatically triggering performance measurements.

// * console.timeStamp(label)
// ? Adds a marker to the browser's performance recording timeline.
// ? Use case: Correlating code events with rendering frames.

// * console.memory
// ? (Chrome-specific) Provides memory usage info: usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit.
// ? Use case: Monitoring memory leaks.


//! ======================================================================
//! 13. WEB STORAGE API (window.localStorage & window.sessionStorage)
//! ======================================================================
//? Both localStorage and sessionStorage allow storing key-value pairs
//? directly in the browser. They share the same Storage interface API.

// * localStorage (Object)
// ? Persistent storage per origin. Data has no expiration; survives reboots.
// ? Max capacity ~5-10MB depending on browser.
// ? Synchronous API (blocks main thread for large data).
// ? Use case: Saving user preferences, auth tokens.

// * sessionStorage (Object)
// ? Identical API to localStorage, but data is cleared when the tab is closed.
// ? Data is not shared between tabs, even same origin.
// ? Use case: Storing form data during multi-step checkout.

// * Storage.setItem(key, value)
// ? Stores a value under the given key. Both are converted to strings.
// ? Use case: Saving an item.

// * Storage.getItem(key)
// ? Retrieves the value associated with the key. Returns null if not found.
// ? Always returns a string (or null).
// ? Use case: Reading a saved setting.

// * Storage.removeItem(key)
// ? Removes the specific key and its associated value.
// ? Use case: Deleting a user's specific preference.

// * Storage.clear()
// ? Deletes ALL key-value pairs in the storage area for the origin.
// ? Use case: "Logout and clear data" functionality.

// * Storage.key(index)
// ? Returns the name of the key at the given integer index.
// ? Order is user-agent defined, not guaranteed.
// ? Use case: Iterating over all keys when you don't know the names.

// * Storage.length
// ? Returns the number of key-value pairs stored.
// ? Use case: Checking if storage is empty.


//! ======================================================================
//! 14. DOCUMENT OBJECT (window.document) - BOM ASPECTS
//! ======================================================================
//? The document object is the root node of the DOM tree. While many
//? properties are DOM-related, several relate to the BOM/window context.

// * document.URL
// ? The full URL of the document as a string. Read-only. Same as location.href.
// ? Use case: Passive URL access.

// * document.referrer
// ? The URI of the page that linked to this page. Empty string if direct navigation.
// ? Use case: Analytics - tracking traffic sources.

// * document.cookie
// ? Gets/sets cookies associated with the document. Setting a cookie involves
// ? assigning a specially formatted string (e.g., "name=value; expires=...; path=/").
// ? Use case: Session management (though HttpOnly cookies are more secure).

// * document.title
// ? Gets/sets the document's title displayed in the browser's title bar or tab.
// ? Use case: Updating tab text for unread notifications.

// * document.domain
// ? (Deprecated) Gets/sets the domain portion of the origin. Used historically
// ? for cross-subdomain communication. Replaced by postMessage.

// * document.lastModified
// ? Returns the date and time the server reported the document was last modified.
// ? String format depends on browser, parse with Date.parse().
// ? Use case: Showing "Page last updated" automatically.

// * document.readyState
// ? Describes the loading state of the document:
// ? 'loading': HTML parsing in progress.
// ? 'interactive': DOM is parsed, resources still loading (like 'DOMContentLoaded').
// ? 'complete': Page and all resources fully loaded (like 'load' event).
// ? Use case: Safely initializing scripts regardless of when they load.

// * document.hidden
// ? Returns true if the page tab is in the background (hidden). Read-only boolean.
// ? Use case: Pausing background video/polls to save resources.

// * document.visibilityState
// ? More granular than hidden. Returns 'visible', 'hidden', or 'prerender'.
// ? Use case: Precision control over background behavior.

// * document.designMode
// ? Setting to 'on' makes the entire document editable (like a WYSIWYG editor).
// ? Use case: Quick prototyping of editable templates.

// * document.hasFocus()
// ? Returns true if the document (or any element inside) has focus.
// ? Use case: Checking if a game window should capture keyboard input.

// * document.activeElement
// ? Returns the deeply nested element that currently has focus.
// ? If nothing is focused, returns the <body> or <html> element.
// ? Use case: Keyboard shortcuts, knowing where user is typing.

// * document.characterSet
// ? The character encoding used by the document (e.g., "UTF-8"). Read-only.
// ? Use case: Ensuring data is sent with correct encoding.

// * document.contentType
// ? Returns the MIME type of the document (e.g., "text/html"). Read-only.
// ? Use case: Rare, checking if XML document is being processed.


//! ======================================================================
//! 15. GLOBAL UTILITY CONSTRUCTORS (via window)
//! ======================================================================
//? These are core JavaScript language features, but they're technically
//? properties of the window object in browsers.

// * window.Array, window.Object, window.String, window.Number, window.Boolean
// ? The fundamental data type constructors. Available globally.

// * window.Function
// ? Constructor for creating functions dynamically (eval alternative).

// * window.Date
// ? For creating and manipulating dates and times.

// * window.RegExp
// ? For creating and executing regular expressions.

// * window.Error, TypeError, SyntaxError, ReferenceError, RangeError, URIError, EvalError
// ? Native error constructors for creating and identifying different error types.

// * window.Promise
// ? Represents asynchronous operations. Core to modern async JS.

// * window.Symbol
// ? Creates unique, immutable identifiers often used for object keys.

// * window.Map
// ? Stores key-value pairs with any type as keys, retaining insertion order.

// * window.Set
// ? Stores unique values of any type, also in insertion order.

// * window.WeakMap / window.WeakSet
// ? Like Map/Set but holds "weak" references to objects (allows garbage collection).

// * window.Proxy
// ? Creates an object that intercepts fundamental operations (get, set, etc.) on another object.

// * window.Reflect
// ? Provides methods for interceptable JavaScript operations.

// * window.Intl
// ? The Internationalization API. Provides locale-specific date/time/number formatting, plural rules, etc.

// * window.JSON
// ? Contains parse() and stringify() for converting between JSON strings and JavaScript objects.

// * window.Math
// ? Contains mathematical functions and constants (PI, sin, random, etc.).

// * window.BigInt
// ? Constructor for representing integers larger than 2^53 - 1.

// * window.crypto
// ? Provides getRandomValues() for generating cryptographically strong random numbers.
// ? Also provides subtle encryption/decryption methods (subtle.digest, subtle.encrypt).

// * window.TextEncoder / window.TextDecoder
// ? Converts strings to/from binary data using specific character encodings (UTF-8 default).

// * window.URL / window.URLSearchParams
// ? URL: Parses, constructs, and normalizes URLs. URLSearchParams: Manipulates query strings.

// * window.FormData
// ? Interface to construct key/value pairs representing form fields and their values.

// * window.Blob
// ? Represents immutable raw binary data. Creating downloadable files, image processing.

// * window.File / window.FileReader / window.FileList
// ? Handles files from the user's file system (via input[type=file] or drag-and-drop).

// * window.MutationObserver
// ? Observes changes to the DOM tree (attribute changes, child additions/removals).

// * window.IntersectionObserver
// ? Observes intersection (visibility) of an element relative to an ancestor or viewport.

// * window.ResizeObserver
// ? Observes changes to the dimensions of an element's content box.

// * window.PerformanceObserver
// ? Receives notifications about performance metrics (like long tasks, paint timing).

// * window.ReportingObserver
// ? Receives reports from the browser (like CSP violations, deprecation warnings).

// * window.fetch()
// ? Modern network request API returning Promises. Replacement for XMLHttpRequest.

// * window.XMLHttpRequest
// ? Legacy API for network requests. Still widely supported.

// * window.WebSocket
// ? Creates a persistent, bidirectional communication channel between client and server.

// * window.EventSource
// ? Client for Server-Sent Events (SSE); server pushes real-time updates to client.

// * window.Worker / window.SharedWorker
// ? Runs scripts in background threads (Web Workers) for parallel processing.

// * window.Notification
// ? Displays system-level desktop notifications (requires permission).

// * window.AudioContext / window.webkitAudioContext
// ? Entry point for the Web Audio API (advanced audio processing).

// * window.SpeechSynthesis / window.SpeechRecognition
// ? Text-to-speech and Speech-to-text interfaces.

// * window.requestFileSystem / window.resolveLocalFileSystemURL
// ? (Chrome) Legacy File System API for sandboxed file storage.




//! ======================================================================
//! DOM (Document Object Model) - 100% COMPLETE REFERENCE
//! ======================================================================
//? The Document Object Model (DOM) is a programming interface for HTML and
//? XML documents. It represents the page so that programs can change the
//? document structure, style, and content. The DOM represents the document
//? as a tree of nodes and objects. Each node represents a part of the
//? document (elements, text, attributes, comments, etc.).

//! ======================================================================
//! 1. DOCUMENT OBJECT - PROPERTIES
//! ======================================================================
//? The Document object is the root node of the DOM tree and the entry
//? point to the entire web page content. It provides properties to
//? access every element, style, and script on the page.

// * document.URL
// ? Returns the complete URL of the document as a string. Read-only.
// ? Unlike location.href, setting this does NOT navigate the browser.
// ? Example: "https://example.com/page.html"
// ? Use case: Reading current URL without potential navigation side effects.

// * document.documentURI
// ? Returns document location as a string. Similar to document.URL but
// ? works for all document types (XML, SVG). Read-only.
// ? Use case: Getting URI in XML documents where document.URL may be null.

// * document.baseURI
// ? Returns the base URL of the document used to resolve relative URLs.
// ? Respects the <base> element if present in <head>. Read-only.
// ? Use case: Resolving relative paths correctly.

// * document.title
// ? Gets or sets the document's title shown in browser tab/title bar.
// ? Setting updates the tab text immediately.
// ? Example: document.title = "New Page Title";
// ? Use case: Dynamic tab titles for unread message counts.

// * document.domain
// ? (Deprecated) Gets/sets the domain portion of the document's origin.
// ? Used to allow cross-subdomain communication. Now replaced by postMessage().
// ? Use case: Legacy code only. Avoid in new projects.

// * document.referrer
// ? Returns the URI of the page that linked to this page via navigation.
// ? Returns empty string if user typed URL directly or used bookmark.
// ? Example: "https://google.com/search?q=example"
// ? Use case: Analytics tracking to see traffic sources.

// * document.cookie
// ? Gets/sets semicolon-separated string of all cookies for current document.
// ? Getting: Returns all cookies as "key1=val1; key2=val2".
// ? Setting: Assign "key=value; expires=date; path=/; secure; samesite".
// ? Does NOT return HttpOnly cookies (only accessible server-side).
// ? Use case: Client-side cookie management.

// * document.lastModified
// ? Returns the date/time string the server reported as last modification.
// ? Format varies by browser/server. Parse with Date.parse().
// ? Example: "07/15/2023 14:30:00"
// ? Use case: Displaying "Page last updated" timestamp.

// * document.readyState
// ? Returns loading state as string: "loading" | "interactive" | "complete".
// ? "loading": HTML still parsing, resources loading.
// ? "interactive": DOM parsed, deferred scripts executed (DOMContentLoaded).
// ? "complete": All resources (images, stylesheets) fully loaded (load event).
// ? Use case: Safe initialization regardless of script load timing.

// * document.documentElement
// ? Returns the root element of the document - <html> element.
// ? Accessible before DOMContentLoaded. Always exists.
// ? Use case: Getting/setting lang attribute, modifying page-level classes.

// * document.head
// ? Returns the <head> element of the document. Shorthand convenience.
// ? Equivalent to document.querySelector('head').
// ? Use case: Dynamically adding meta tags, stylesheets, scripts.

// * document.body
// ? Returns the <body> element. Returns null if script runs before <body> exists.
// ? Use case: Appending content, setting page-level classes for themes.

// * document.images
// ? Returns live HTMLCollection of all <img> and <image> (SVG) elements.
// ? Automatically updates when images are added/removed from DOM.
// ? Use case: Preloading images, checking if images have loaded.

// * document.embeds / document.plugins
// ? Returns live HTMLCollection of all <embed> elements.
// ? Both properties return the same collection. Historical aliases.
// ? Use case: Interacting with embedded content (PDF, Flash).

// * document.links
// ? Returns live HTMLCollection of all <a> and <area> elements with href attribute.
// ? Use case: Collecting all outbound links for analytics tracking.

// * document.forms
// ? Returns live HTMLCollection of all <form> elements in the document.
// ? Use case: Form serialization, validation across all forms.

// * document.scripts
// ? Returns live HTMLCollection of all <script> elements.
// ? Includes both inline and external scripts, sync and async.
// ? Use case: Dynamic script loading analysis.

// * document.styleSheets
// ? Returns StyleSheetList of all CSSStyleSheet objects (all <style> and <link rel="stylesheet">).
// ? Live collection that updates as stylesheets are added/removed.
// ? Use case: Dynamically reading/modifying CSS rules.

// * document.anchors
// ? (Deprecated) Returns HTMLCollection of all <a> elements with name attribute.
// ? HTML5 replaced name with id. Not commonly used anymore.
// ? Use case: Legacy code compatibility.

// * document.applets
// ? (Deprecated) Returns HTMLCollection of all <applet> elements (Java applets).
// ? Applets are completely obsolete in modern browsers.
// ? Use case: None. Always returns empty collection.

// * document.all
// ? (Deprecated) Returns HTMLAllCollection of all elements. Ancient IE feature.
// ? Still exists but should NOT be used. Use document.querySelectorAll() instead.
// ? Use case: None. Falsey behavior used for ancient browser detection.

// * document.doctype
// ? Returns the DocumentType node representing the <!DOCTYPE html> declaration.
// ? Read-only. Returns null if no doctype.
// ? Use case: Checking if page is in standards mode.

// * document.documentElement.lang
// ? Gets/sets the lang attribute on <html> element.
// ? Example: "en", "hi", "fr-CA".
// ? Use case: Accessibility, SEO, and CSS :lang() selector support.

// * document.dir
// ? Gets/sets text direction: "ltr" (left-to-right), "rtl" (right-to-left), or "auto".
// ? Reflects the dir attribute on <html> element.
// ? Use case: Internationalization (RTL languages like Arabic, Urdu).

// * document.characterSet
// ? Returns the character encoding used by the document (e.g., "UTF-8").
// ? Read-only. Always returns the actual encoding regardless of declared encoding.
// ? Use case: Ensuring data processing uses correct encoding.

// * document.charset
// ? Alias for document.characterSet. Deprecated in favor of characterSet.
// ? Read-only.

// * document.inputEncoding
// ? Returns the character encoding used for parsing. Same as characterSet.
// ? Read-only. Historical name.

// * document.contentType
// ? Returns the MIME type of the document. "text/html" for HTML, "image/svg+xml" for SVG.
// ? Read-only.
// ? Use case: Checking document type for processing logic.

// * document.compatMode
// ? Returns the rendering mode: "BackCompat" (quirks mode) or "CSS1Compat" (standards mode).
// ? Determined by DOCTYPE presence. Affects CSS box model calculations.
// ? Use case: Ensuring page renders in standards mode.

// * document.designMode
// ? Gets/sets "on" or "off". When "on", entire document becomes editable.
// ? Like a WYSIWYG editor. Cursor becomes text insertion cursor.
// ? Use case: Building rich text editors, quick prototyping.

// * document.hidden
// ? Returns true if page is not visible to user (background tab, minimized).
// ? Read-only boolean. Use with visibilitychange event.
// ? Use case: Pausing animations/video in background tabs to save CPU.

// * document.visibilityState
// ? Returns visibility: "visible" (tab active), "hidden" (background), "prerender" (preloaded).
// ? More granular than document.hidden.
// ? Use case: Precision control over page behavior based on visibility.

// * document.activeElement
// ? Returns the element that currently has focus (receives keyboard input).
// ? Returns <body> or document.documentElement if no element focused.
// ? Use case: Keyboard shortcuts, modals - knowing where user is typing.

// * document.fullscreenElement
// ? Returns the element displayed in fullscreen mode, or null if not in fullscreen.
// ? Use case: Checking if page/iframe/video is fullscreen.

// * document.fullscreenEnabled
// ? Returns true if fullscreen mode can be requested (API supported + not blocked).
// ? Use case: Hiding fullscreen buttons on unsupported browsers.

// * document.pictureInPictureEnabled
// ? Returns true if Picture-in-Picture API is available.
// ? Use case: Showing PiP button for video players.

// * document.pictureInPictureElement
// ? Returns the element currently in PiP mode, or null.
// ? Use case: Checking PiP state.

// * document.pointerLockElement
// ? Returns the element locked for mouse pointer, or null.
// ? Use case: FPS games that capture mouse movement.

// * document.scrollingElement
// ? Returns the element that scrolls the document (usually documentElement).
// ? In quirks mode, returns body. Use for cross-browser scroll operations.
// ? Use case: Reliable scrolling regardless of rendering mode.

// * document.defaultView
// ? Returns the window object associated with the document. Same as window.
// ? Use case: Accessing window when only document reference is available.

// * document.adoptedStyleSheets
// ? Array of constructed stylesheets (CSSStyleSheet objects via new CSSStyleSheet()).
// ? More performant than creating <style> elements.
// ? Use case: Shadow DOM styling in custom elements.

// * document.fonts
// ? Returns FontFaceSet object for managing dynamically loaded fonts.
// ? Provides ready promise and check() method.
// ? Use case: Ensuring custom fonts are loaded before rendering.

// * document.timeline
// ? Returns the default DocumentTimeline for Web Animations API.
// ? Use case: Creating animations with document.timeline.

// * document.rootElement (Deprecated)
// ? Returns the root SVG element. Deprecated in favor of documentElement.

// * document.xmlVersion / xmlStandalone / xmlEncoding
// ? Properties for XML documents only. Return document's XML declaration values.
// ? Not typically used in HTML documents.


//! ======================================================================
//! 2. DOCUMENT OBJECT - METHODS
//! ======================================================================
//? These methods search for, create, and manipulate elements within the
//? document tree. They are the primary tools for DOM scripting.

// --- 2A: Element Selection Methods ---

// * document.getElementById(id)
// ? Returns the single element with the specified unique ID attribute (without #).
// ? Returns null if no element found. Extremely fast (direct lookup).
// ? Example: document.getElementById("header")
// ? Use case: Quick access to known, unique elements.

// * document.getElementsByClassName(classNames)
// ? Returns a LIVE HTMLCollection of elements matching ALL specified classes.
// ? Accepts space-separated class names (e.g., "btn primary").
// ? Live means collection updates when DOM changes.
// ? Example: document.getElementsByClassName("btn")
// ? Use case: Getting groups of similar elements.

// * document.getElementsByTagName(tagName)
// ? Returns a LIVE HTMLCollection of elements with specified tag name.
// ? Use "*" for all elements (slow but comprehensive).
// ? Example: document.getElementsByTagName("div")
// ? Use case: Collecting all elements of a type.

// * document.getElementsByName(name)
// ? Returns a LIVE NodeList of elements with matching name attribute.
// ? Primarily used for form elements (radio buttons, checkboxes).
// ? Example: document.getElementsByName("gender")
// ? Use case: Getting radio button groups, form field collections.

// * document.querySelector(selector)
// ? Returns the FIRST element matching the CSS selector string.
// ? Returns null if no match. Can use any valid CSS selector.
// ? Example: document.querySelector("#main .container > p:first-child")
// ? Use case: Modern, flexible single element selection.

// * document.querySelectorAll(selector)
// ? Returns a STATIC NodeList of ALL elements matching CSS selector.
// ? Static means it doesn't update when DOM changes (unlike getElementsBy).
// ? Can use any CSS selector including pseudo-classes.
// ? Example: document.querySelectorAll("div.note, div.alert")
// ? Use case: Modern, flexible multi-element selection.

// * document.closest(selector)
// ? Returns the closest ANCESTOR of the element matching the selector.
// ? Starts at the element itself, then traverses up through parents.
// ? Returns null if no match found in the ancestry chain.
// ? Example: event.target.closest(".menu-item")
// ? Use case: Event delegation - finding which menu item was clicked.

// * document.matches(selector)
// ? Returns true if the element would be selected by the specified CSS selector.
// ? Does NOT traverse; checks only the element itself.
// ? Example: element.matches(":hover")
// ? Use case: Checking element state without event listeners.

// --- 2B: Element Creation Methods ---

// * document.createElement(tagName, options)
// ? Creates a new HTML element specified by tagName. NOT yet in DOM.
// ? 'options': { is: 'custom-element-name' } for custom elements.
// ? Returns the new element object for further configuration.
// ? Example: const div = document.createElement("div")
// ? Use case: Dynamic content creation.

// * document.createElementNS(namespaceURI, qualifiedName)
// ? Creates element with namespace (for SVG, MathML, XUL).
// ? Namespace: "http://www.w3.org/2000/svg" for SVG.
// ? Example: document.createElementNS("http://www.w3.org/2000/svg", "circle")
// ? Use case: Creating SVG/MathML elements programmatically.

// * document.createTextNode(text)
// ? Creates a new Text node with specified text content. NOT yet in DOM.
// ? Text is escaped (HTML special characters treated as text, not HTML).
// ? Example: document.createTextNode("Hello <world>") renders as literal text.
// ? Use case: Safely inserting user-generated text without XSS risk.

// * document.createComment(text)
// ? Creates a new HTML/XML comment node: <!-- text -->.
// ? Use case: Inserting markers, documentation in generated content.

// * document.createDocumentFragment()
// ? Creates a lightweight, empty container with no parent.
// ? When appended to DOM, the fragment dissolves, leaving only its children.
// ? Crucial performance optimization for batch DOM insertions.
// ? Use case: Appending many elements at once without multiple reflows.

// * document.createAttribute(name)
// ? Creates a new Attr node with specified name. Set value via attr.value.
// ? Example: const align = document.createAttribute("align"); align.value = "center";
// ? Use case: Adding attributes programmatically (element.setAttribute is easier).

// * document.createProcessingInstruction(target, data)
// ? Creates a processing instruction node. Rarely used in HTML.
// ? Example: <?xml-stylesheet type="text/css" href="style.css"?>

// * document.cloneNode(deep)
// ? Creates a clone of the node. 'deep': true = clone all children, false = only element.
// ? Does NOT clone event listeners added via addEventListener (only inline handlers).
// ? Example: element.cloneNode(true)
// ? Use case: Duplicating complex UI components.

// * document.importNode(externalNode, deep)
// ? Imports a node from another document (e.g., iframe or external XML).
// ? The source node stays in original document; returns a copy.
// ? Use case: Moving elements between documents.

// * document.adoptNode(externalNode)
// ? Moves a node from another document to current document. Removes from source.
// ? Use case: Transferring elements between documents without copying.

// --- 2C: Document Modification Methods ---

// * document.write(markup)
// ? Writes HTML/JavaScript directly into the document stream at current position.
// ? If called after page load, it REPLACES the entire document. DANGEROUS.
// ? Blocks parsing. NEVER use in modern async code.
// ? Use case: Legacy scripts only. Avoid in new code.

// * document.writeln(markup)
// ? Same as write() but appends a newline character (\n).
// ? Use case: None. Legacy method.

// * document.open()
// ? Opens document for writing via document.write(). Clears existing content.
// ? Use case: None. Highly destructive.

// * document.close()
// ? Closes document stream opened by document.open(). Finishes page rendering.
// ? Use case: Required after document.write() sequence.

// * document.hasFocus()
// ? Returns true if document or any element within it has keyboard focus.
// ? Use case: Game control checks, chat "user is typing" indicators.

// * document.execCommand(commandId, showUI, value)
// ? (Deprecated) Executes editing commands on contentEditable/designMode document.
// ? Commands: 'copy', 'cut', 'paste', 'bold', 'italic', 'undo', 'redo', etc.
// ? Returns boolean success. Replaced by Clipboard API for copy/cut/paste.
// ? Use case: Legacy rich text editor functionality.

// * document.queryCommandSupported(commandId)
// ? Returns true if browser supports the execCommand command.
// ? Use case: Feature detection before using execCommand.

// * document.queryCommandEnabled(commandId)
// ? Returns true if the command can be executed in current state.
// ? Example: 'paste' returns true if clipboard has content.

// * document.queryCommandState(commandId)
// ? Returns true if command has been applied to selection (bold, italic state).
// ? Use case: Toggle button states in rich text editors.

// * document.queryCommandValue(commandId)
// ? Returns the current value of a document command (e.g., fontName, fontSize).
// ? Use case: Reading current text formatting.

// * document.clear() (Deprecated)
// ? Clears document content. Non-functional in modern browsers.

// * document.caretPositionFromPoint(x, y)
// ? Returns CaretPosition at specified viewport coordinates.
// ? Contains offsetNode (element) and offset (character position).
// ? Use case: Placing cursor on click in custom text editors.

// * document.elementFromPoint(x, y)
// ? Returns the topmost element at specified viewport coordinates.
// ? Respects z-index and stacking context. Returns null if outside viewport.
// ? Use case: Hit testing for custom drag-and-drop, getting element under cursor.

// * document.elementsFromPoint(x, y)
// ? Returns ARRAY of ALL elements at specified coordinates, ordered by stacking.
// ? More complete than elementFromPoint which returns only topmost.
// ? Use case: Complex hit testing through layers.

// * document.getSelection()
// ? Returns a Selection object representing user's current text selection.
// ? Contains anchorNode, focusNode, rangeCount, and methods to modify selection.
// ? Use case: Getting highlighted text, custom copy functionality.

// * document.createRange()
// ? Creates an empty Range object for selecting/manipulating document fragments.
// ? Range has setStart(), setEnd(), extractContents(), etc.
// ? Use case: Complex text manipulation, highlighting, wrapping nodes.

// * document.createNodeIterator(root, whatToShow, filter)
// ? Creates a NodeIterator to traverse DOM nodes in document order.
// ? 'whatToShow': NodeFilter constant (e.g., NodeFilter.SHOW_TEXT).
// ? 'filter': Custom function to accept/reject nodes.
// ? Returns nextNode() and previousNode() for iteration.
// ? Use case: Walking through specific types of nodes efficiently.

// * document.createTreeWalker(root, whatToShow, filter)
// ? Similar to NodeIterator but more flexible. Can traverse parent/child/sibling.
// ? Additional methods: parentNode(), firstChild(), lastChild(), nextSibling().
// ? Use case: Complex DOM tree traversal with filtering.

// --- 2D: Events & Animation ---

// * document.addEventListener(type, listener, options)
// ? Attaches event handler to document. Use for global event delegation.
// ? 'options': { capture, once, passive, signal } or useCapture boolean.
// ? Example: document.addEventListener("click", handler, { capture: true })
// ? Use case: Global click/keyboard shortcuts, event delegation.

// * document.removeEventListener(type, listener, options)
// ? Removes event handler previously added with addEventListener.
// ? Must provide same function reference, not anonymous duplicate.
// ? Use case: Cleanup to prevent memory leaks.

// * document.dispatchEvent(event)
// ? Dispatches a custom or built-in event to the document.
// ? Event must be created via Event/CustomEvent constructor.
// ? Use case: Programmatically triggering behaviors.

// * document.createEvent(type) (Deprecated)
// ? Legacy way to create events. Use new Event() or new CustomEvent() instead.
// ? Use case: None. Use modern constructors.

// * document.getAnimations()
// ? Returns array of ALL Animation objects affecting document or its descendants.
// ? Includes CSS animations, transitions, and WAAPI animations.
// ? Use case: Pausing all animations on a page.

// * document.startViewTransition(callback)
// ? (View Transitions API) Starts a view transition between old and new DOM state.
// ? Captures before state, runs callback to update DOM, transitions after state.
// ? Returns a ViewTransition object with ready, finished, and updateCallbackDone promises.
// ? Use case: Smooth page transitions in SPAs.

// --- 2E: Miscellaneous Methods ---

// * document.exitFullscreen()
// ? Exits fullscreen mode. Returns a Promise. Safe to call even if not fullscreen.
// ? Use case: Custom "Exit Fullscreen" buttons.

// * document.exitPictureInPicture()
// ? Exits Picture-in-Picture mode. Returns Promise.
// ? Use case: Closing PiP video window.

// * document.exitPointerLock()
// ? Releases mouse pointer lock. Safe to call even if not locked.
// ? Use case: Exiting immersive mouse experiences.

// * document.hasStorageAccess()
// ? Returns Promise resolving to true if document has access to unpartitioned cookies.
// ? Used with Storage Access API for iframe cookie access in blocking browsers.
// ? Use case: Checking third-party cookie access.

// * document.requestStorageAccess()
// ? Requests unpartitioned cookie access from user. Returns Promise.
// ? Requires user interaction. Part of Storage Access API.
// ? Use case: Embedded widgets requiring cookie access.

// * document.hasPrivateToken(issuer)
// ? Private State Token API. Returns Promise with token redemption info.
// ? Use case: Fraud detection without tracking.

// * document.browsingTopics()
// ? Topics API (Privacy Sandbox). Returns Promise with user interest topics.
// ? Use case: Interest-based advertising without third-party cookies.

// * document.prepareForPrint()
// ? Fired to indicate printing is about to occur. Experimental.
// ? Use case: Optimizing layout just before print.

// * document.observeForPrinting()
// ? Print-specific event handling. Experimental.


//! ======================================================================
//! 3. NODE OBJECT - PROPERTIES (Base class for all DOM nodes)
//! ======================================================================
//? All DOM objects (elements, text, comments, documents) inherit from Node.
//? Node provides the tree structure properties and methods shared by all.

// * node.nodeType
// ? Returns integer representing node type:
// ? 1 = ELEMENT_NODE (<div>, <p>)
// ? 2 = ATTRIBUTE_NODE (deprecated)
// ? 3 = TEXT_NODE (text content)
// ? 4 = CDATA_SECTION_NODE
// ? 7 = PROCESSING_INSTRUCTION_NODE
// ? 8 = COMMENT_NODE (<!-- ... -->)
// ? 9 = DOCUMENT_NODE (document)
// ? 10 = DOCUMENT_TYPE_NODE (<!DOCTYPE>)
// ? 11 = DOCUMENT_FRAGMENT_NODE (DocumentFragment)
// ? Use case: Identifying node type without instanceof checks.

// * node.nodeName
// ? Returns uppercase tag name for elements ("DIV", "SPAN").
// ? For text nodes: "#text", comments: "#comment", document: "#document".
// ? Read-only string.
// ? Use case: Quick tag name comparison.

// * node.nodeValue
// ? Gets/sets value based on nodeType.
// ? Text nodes: text content. Comments: comment text. Elements: null.
// ? For attributes, use attr.value or getAttribute().
// ? Use case: Modifying text/comment content.

// * node.baseURI
// ? Returns the absolute base URL of the document containing the node.
// ? Read-only. Same as document.baseURI for all nodes in same document.
// ? Use case: Resolving relative URLs from any node position.

// * node.parentNode
// ? Returns the parent node (element, document, or fragment). Read-only.
// ? Returns null if node has no parent (not attached to DOM).
// ? Use case: Traversing up the DOM tree.

// * node.parentElement
// ? Returns parent ELEMENT node (null if parent is not an element).
// ? Same as parentNode but only returns element nodes.
// ? Use case: Getting the containing element specifically.

// * node.childNodes
// ? Returns LIVE NodeList of ALL child nodes (elements, text, comments).
// ? Includes whitespace text nodes (line breaks between elements).
// ? Can be accessed by index: node.childNodes[0].
// ? Use case: Iterating all children including text.

// * node.children
// ? Returns LIVE HTMLCollection of child ELEMENT nodes only.
// ? Does NOT include text nodes, comments. Preferred for element access.
// ? Use case: Iterating child elements without text node interference.

// * node.firstChild
// ? Returns first child node (could be text, element, comment). Read-only.
// ? Returns null if no children.
// ? Use case: Quick access to first child regardless of type.

// * node.lastChild
// ? Returns last child node. Symmetric to firstChild. Read-only.
// ? Use case: Quick access to last child.

// * node.firstElementChild
// ? Returns first child that is an ELEMENT. Skips text/comments. Read-only.
// ? Use case: Getting first child element reliably.

// * node.lastElementChild
// ? Returns last child that is an ELEMENT. Read-only.
// ? Use case: Getting last child element.

// * node.previousSibling
// ? Returns the immediately preceding sibling node (any type). Read-only.
// ? Returns null if this is first child.
// ? Use case: Navigating between adjacent nodes.

// * node.nextSibling
// ? Returns the immediately following sibling node (any type). Read-only.
// ? Returns null if this is last child.
// ? Use case: Walking through siblings.

// * node.previousElementSibling
// ? Returns preceding sibling that is an ELEMENT. Skips text/comments.
// ? Use case: Getting previous element in list.

// * node.nextElementSibling
// ? Returns following sibling that is an ELEMENT.
// ? Use case: Getting next element in list.

// * node.textContent
// ? Gets/sets the text content of node and ALL descendants.
// ? Setting: Replaces ALL children with single text node (safe from XSS).
// ? Getting: Returns concatenated text of all descendants, ignoring HTML tags.
// ? Different from innerText: textContent returns hidden element text, preserves whitespace.
// ? Use case: Reading clean text without HTML tags.

// * node.ownerDocument
// ? Returns the Document object that the node belongs to. Read-only.
// ? For document node itself, returns null.
// ? Use case: Getting document reference from any node.

// * node.isConnected
// ? Returns true if node is connected to a DOM tree (inserted in document).
// ? Returns false if node is detached/fragment. Read-only boolean.
// ? Use case: Checking if node is actually rendered.

// * node.isEqualNode(otherNode)
// ? Returns true if two nodes are EQUAL (same type, attributes, children, values).
// ? Compares structure and content, not identity.
// ? Use case: Deep comparison of node trees.

// * node.isSameNode(otherNode)
// ? Returns true if both references point to the EXACT same node object.
// ? Equivalent to node === otherNode.
// ? Use case: Reference equality check (legacy method).

// * node.contains(otherNode)
// ? Returns true if otherNode is a descendant of node (any depth).
// ? Returns true if node contains itself.
// ? Use case: Checking if element is inside another.

// * node.compareDocumentPosition(otherNode)
// ? Returns bitmask indicating relationship:
// ? 0: Same node
// ? DOCUMENT_POSITION_DISCONNECTED (1): Not in same tree
// ? DOCUMENT_POSITION_PRECEDING (2): otherNode before node
// ? DOCUMENT_POSITION_FOLLOWING (4): otherNode after node
// ? DOCUMENT_POSITION_CONTAINS (8): otherNode is ancestor
// ? DOCUMENT_POSITION_CONTAINED_BY (16): otherNode is descendant
// ? Use case: Precise relative position determination.

// * node.getRootNode(options)
// ? Returns the root of the tree: document for normal DOM, shadow root if in shadow tree.
// ? 'options': { composed: true } traverses across shadow boundaries.
// ? Use case: Finding the root context of an element.

// * node.lookupPrefix(namespaceURI)
// ? Returns the prefix for given namespace URI. Rarely used outside SVG/XML.
// ? Use case: XML namespace resolution.

// * node.lookupNamespaceURI(prefix)
// ? Returns the namespace URI for given prefix.
// ? Use case: XML handling.

// * node.isDefaultNamespace(namespaceURI)
// ? Returns true if given namespace is the default namespace of the node.
// ? Use case: Namespace checks.

// * node.normalize()
// ? Normalizes the node's subtree: merges adjacent text nodes, removes empty text nodes.
// ? Use case: Cleaning up text nodes after DOM manipulation.

// * node.cloneNode(deep)
// ? Creates a copy of the node. deep=true clones subtree, deep=false clones only node.
// ? Does NOT copy event listeners added via addEventListener.
// ? Does copy inline event handlers (onclick attributes).
// ? Use case: Duplicating templates.

// * node.hasChildNodes()
// ? Returns true if node has any child nodes (including text, comments).
// ? Faster than checking node.childNodes.length > 0.
// ? Use case: Checking if element is empty.


//! ======================================================================
//! 4. NODE OBJECT - MANIPULATION METHODS
//! ======================================================================
//? These methods add, remove, replace, and reorder nodes in the DOM tree.
//? They are the core tools for dynamic content updates.

// * node.appendChild(childNode)
// ? Adds 'childNode' as the LAST child of the calling node.
// ? If childNode already exists in DOM, it is MOVED (not copied).
// ? Returns the appended child node.
// ? Example: parent.appendChild(newElement)
// ? Use case: Adding items to end of list.

// * node.insertBefore(newNode, referenceNode)
// ? Inserts 'newNode' before 'referenceNode' as a child of the calling node.
// ? If 'referenceNode' is null, inserts at end (like appendChild).
// ? Returns the inserted node.
// ? Example: parent.insertBefore(newItem, parent.firstChild)
// ? Use case: Inserting items at specific position.

// * node.removeChild(childNode)
// ? Removes 'childNode' from the calling node. Returns the removed node.
// ? Removed node still exists in memory and can be reinserted elsewhere.
// ? Throws error if childNode is not actually a child.
// ? Use case: Deleting specific list items.

// * node.replaceChild(newChild, oldChild)
// ? Replaces 'oldChild' with 'newChild'. Returns the removed oldChild.
// ? New child takes the exact same position in children list.
// ? Use case: Swapping elements without disrupting order.

// * node.insertAdjacentElement(position, element)
// ? Inserts element relative to the calling node's position:
// ? 'beforebegin': Before the node itself (as previous sibling).
// ? 'afterbegin': Inside node, before first child.
// ? 'beforeend': Inside node, after last child.
// ? 'afterend': After the node itself (as next sibling).
// ? Visual: <!-- beforebegin --><node><!-- afterbegin -->...<!-- beforeend --></node><!-- afterend -->
// ? Use case: Precise DOM insertion without parentNode reference.

// * node.insertAdjacentHTML(position, htmlString)
// ? Same positions as insertAdjacentElement, but parses HTML string.
// ? Does NOT re-parse the calling element itself. Faster than innerHTML +=.
// ? Example: list.insertAdjacentHTML('beforeend', '<li>New Item</li>')
// ? Use case: Appending HTML fragments efficiently.

// * node.insertAdjacentText(position, text)
// ? Same positions, but inserts text (safely escaped, no XSS risk).
// ? Example: heading.insertAdjacentText('afterend', ' (new)')
// ? Use case: Adding text labels near elements.

// * node.prepend(...nodesOrStrings)
// ? Inserts nodes or strings BEFORE the first child. Accepts multiple arguments.
// ? Strings are converted to text nodes (safe).
// ? Example: element.prepend("Start: ", badgeElement)
// ? Use case: Adding items to beginning of container.

// * node.append(...nodesOrStrings)
// ? Inserts nodes or strings AFTER the last child. Accepts multiple arguments.
// ? More flexible than appendChild (can add multiple, text too).
// ? Example: element.append("End: ", footerElement)
// ? Use case: Adding items to end of container.

// * node.before(...nodesOrStrings)
// ? Inserts content BEFORE the node itself (as previous siblings).
// ? Example: paragraph.before(separatorLine)
// ? Use case: Inserting separators, headings before sections.

// * node.after(...nodesOrStrings)
// ? Inserts content AFTER the node itself (as next siblings).
// ? Example: paragraph.after(dividerElement)
// ? Use case: Adding content after a specific element.

// * node.replaceWith(...nodesOrStrings)
// ? Replaces the calling node with new content. Node is removed from DOM.
// ? Example: oldElement.replaceWith(newElement)
// ? Use case: Swapping components, upgrading elements.

// * node.remove()
// ? Removes the calling node from its parent. No argument needed.
// ? Cleaner alternative to parentNode.removeChild(node).
// ? Use case: Self-removal of elements.

// * node.swapWith(otherNode)
// ? (Custom/proposed) Swaps positions of two sibling nodes. Not standard.
// ? Use case: Reordering elements.

// * node.moveBefore(otherNode) / moveAfter()
// ? (Proposed) Moves node before/after another. Not yet widely supported.


//! ======================================================================
//! 5. ELEMENT OBJECT - PROPERTIES (HTMLElement inherits from Element)
//! ======================================================================
//? Element is the base class for all HTML/SVG elements. It provides
//? properties for attributes, dimensions, styling, and interaction.

// * element.tagName
// ? Returns the element's tag name in UPPERCASE. Read-only.
// ? Example: <div> returns "DIV", <span> returns "SPAN".
// ? Use case: Checking element type.

// * element.localName
// ? Returns the local name (tag name in lowercase). Read-only.
// ? For HTML: same as tagName but lowercase. For SVG: case-sensitive.
// ? Use case: Case-insensitive tag checks.

// * element.namespaceURI
// ? Returns the namespace URI. HTML elements return "http://www.w3.org/1999/xhtml".
// ? SVG elements return "http://www.w3.org/2000/svg". Read-only.
// ? Use case: Determining element type context.

// * element.prefix
// ? Returns the namespace prefix if any (e.g., "svg" for <svg:rect>). Read-only.
// ? Usually null in HTML.

// * element.id
// ? Gets/sets the element's id attribute as a string.
// ? Must be unique within document.
// ? Example: element.id = "mainContent"
// ? Use case: Dynamically setting element identifiers.

// * element.className
// ? Gets/sets the entire class attribute as a single space-separated string.
// ? Use classList for granular class manipulation (easier).
// ? Example: element.className = "btn primary active"
// ? Use case: Bulk setting all classes at once.

// * element.classList
// ? Returns a LIVE DOMTokenList of all classes. Provides methods:
// ? add(...tokens): Add one or more classes.
// ? remove(...tokens): Remove one or more classes.
// ? toggle(token, force): Toggle class (force add/remove with boolean).
// ? contains(token): Check if class exists.
// ? replace(old, new): Replace one class with another.
// ? Use case: Granular class manipulation without string parsing.

// * element.slot
// ? Gets/sets the slot name for elements in shadow DOM. Empty string if unnamed.
// ? Use case: Web Components slot assignment.

// * element.part
// ? Gets/sets the part attribute (DOMTokenList) for styling components via ::part().
// ? Use case: CSS theming of Web Components from outside.

// * element.attributes
// ? Returns LIVE NamedNodeMap of all attribute nodes (name, value pairs).
// ? Can access by index or attribute name.
// ? Example: element.attributes[0] or element.attributes['href']
// ? Use case: Iterating all attributes.

// * element.hasAttributes()
// ? Returns true if element has any attributes defined.
// ? Use case: Quick check before attribute processing.

// * element.getAttribute(attributeName)
// ? Returns the string value of the named attribute.
// ? Returns null if attribute doesn't exist.
// ? Use case: Reading standard or custom attributes.

// * element.getAttributeNames()
// ? Returns array of all attribute names (strings) on the element.
// ? Use case: Discovering what attributes are set.

// * element.setAttribute(attributeName, value)
// ? Sets the named attribute to specified value. Creates it if doesn't exist.
// ? Automatically converts value to string.
// ? Example: element.setAttribute("data-index", "5")
// ? Use case: Setting attributes dynamically.

// * element.removeAttribute(attributeName)
// ? Removes the named attribute entirely from the element.
// ? No error if attribute doesn't exist.
// ? Use case: Removing disabled, hidden, or custom attributes.

// * element.toggleAttribute(qualifiedName, force)
// ? Toggles a boolean attribute (adds if absent, removes if present).
// ? Optional 'force' boolean to force add (true) or remove (false).
// ? Returns true if attribute is present after toggling.
// ? Use case: Toggling disabled, checked, hidden, open.

// * element.hasAttribute(attributeName)
// ? Returns true if the element has the specified attribute.
// ? Use case: Checking state before toggling.

// * element.getAttributeNode(attributeName)
// ? Returns the attribute as an Attr node. Deprecated in favor of getAttribute().
// ? Use case: Rarely used in modern code.

// * element.setAttributeNode(attrNode)
// ? Sets attribute using Attr node. Deprecated.

// * element.removeAttributeNode(attrNode)
// ? Removes specified Attr node. Deprecated.

// * element.dataset
// ? Returns a DOMStringMap providing access to all data-* attributes.
// ? data-user-id becomes element.dataset.userId (camelCase conversion).
// ? Can read, set, and delete: dataset.key = value; delete dataset.key.
// ? Use case: Storing arbitrary data on elements without class/attribute parsing.

// * element.innerHTML
// ? Gets/sets the HTML content inside the element as a string.
// ? GETTING: Returns serialized HTML of all descendants.
// ? SETTING: Replaces ALL children with parsed HTML. Can cause XSS if unsanitized.
// ? Use case: Injecting HTML content dynamically.

// * element.outerHTML
// ? Gets/sets the HTML of the element INCLUDING the element itself.
// ? GETTING: Returns element and all descendants as HTML string.
// ? SETTING: Replaces the element with new parsed HTML (element removed from DOM).
// ? Use case: Replacing entire element structures.

// * element.innerText
// ? Gets/sets the rendered text content of element and descendants.
// ? GETTING: Returns visible text, accounting for CSS (hidden elements excluded).
// ? SETTING: Replaces children with text (safe, no XSS). Triggers reflow.
// ? Different from textContent: innerText respects styling (hidden, capitalized).
// ? Use case: Getting visible text as user sees it.

// * element.outerText
// ? Similar to outerHTML but for text. Setting replaces element with text node.
// ? Rarely used.

// * element.contentEditable
// ? Gets/sets whether element is editable. Values: "true", "false", "inherit".
// ? Making an element editable allows user to type and modify content.
// ? Use case: Building rich text editors.

// * element.isContentEditable
// ? Returns true if element is editable (contentEditable="true" inherited).
// ? Read-only boolean.
// ? Use case: Checking edit mode.

// * element.draggable
// ? Gets/sets whether element is draggable (true/false). For HTML Drag and Drop API.
// ? Use case: Enabling drag operations.

// * element.hidden
// ? Gets/sets whether element is hidden. Equivalent to display:none in UA stylesheet.
// ? Boolean: true hides element, false shows it.
// ? Example: element.hidden = true
// ? Use case: Simple element visibility toggling.

// * element.spellcheck
// ? Gets/sets whether spell checking is enabled for editable content.
// ? Use case: Disabling spellcheck on code editors, email fields.

// * element.translate
// ? Gets/sets whether element's text should be translated by browser.
// ? Use case: Preventing translation of brand names, code snippets.

// * element.lang
// ? Gets/sets the language of the element. Overrides document language.
// ? Use case: Marking foreign language phrases.

// * element.dir
// ? Gets/sets text direction: "ltr", "rtl", "auto".
// ? Use case: RTL support for specific sections.

// * element.title
// ? Gets/sets the tooltip text shown on hover (title attribute).
// ? Use case: Adding explanatory tooltips.

// * element.tabIndex
// ? Gets/sets the tab order of element. -1 = programmatically focusable but not tabbable.
// ? 0 = normal tab order. Positive = custom order.
// ? Use case: Custom focus management.

// * element.accessKey
// ? Gets/sets a shortcut key to focus/activate the element.
// ? Browser-specific: Alt+key on Windows, Ctrl+Option+key on Mac.
// ? Use case: Keyboard shortcuts.

// * element.nonce
// ? Returns the cryptographic nonce for Content Security Policy. Read-only.
// ? Use case: CSP verification.

// * element.offsetParent
// ? Returns the closest positioned ancestor (position: relative/absolute/fixed/sticky)
// ? or the nearest td/th/table, or body. Null for fixed/hidden elements.
// ? Read-only. Used for calculating offsetTop/offsetLeft.
// ? Use case: Understanding positioning context.

// * element.offsetTop
// ? Returns the distance from element's outer top border to offsetParent's inner top.
// ? Read-only integer. Includes margin if offsetParent is body.
// ? Use case: Getting element's position relative to positioned ancestor.

// * element.offsetLeft
// ? Returns the distance from element's outer left border to offsetParent's inner left.
// ? Read-only integer.

// * element.offsetWidth
// ? Returns the layout width of element: border + padding + scrollbar + content.
// ? Integer pixels. Includes borders and padding, excludes margin.
// ? Use case: Getting total rendered width.

// * element.offsetHeight
// ? Returns layout height: border + padding + scrollbar + content. Integer pixels.
// ? Use case: Getting total rendered height.

// * element.clientTop
// ? Returns the width of the top border in pixels. Read-only integer.
// ? Usually 0-2px. For body in quirks mode may return non-zero.
// ? Use case: Calculating inner coordinates.

// * element.clientLeft
// ? Returns the width of left border + scrollbar width (if vertical scrollbar on left).
// ? Typically same as left border width.
// ? Use case: Coordinate mapping.

// * element.clientWidth
// ? Returns inner width: content + padding (NO border, NO scrollbar).
// ? Rounded to integer. For documentElement, equals viewport width.
// ? Use case: Getting available content space.

// * element.clientHeight
// ? Returns inner height: content + padding (NO border, NO horizontal scrollbar).
// ? For documentElement, equals viewport height.
// ? Use case: Determining visible content area.

// * element.scrollTop
// ? Gets/sets the number of pixels content is scrolled vertically.
// ? Setting scrolls the element to that position.
// ? Use case: Programmatic scrolling within containers.

// * element.scrollLeft
// ? Gets/sets horizontal scroll position in pixels.
// ? Use case: Horizontal scrolling control.

// * element.scrollWidth
// ? Returns total scrollable width including overflow hidden from view. Read-only.
// ? Equals clientWidth if no overflow content.
// ? Use case: Checking if content overflows horizontally.

// * element.scrollHeight
// ? Returns total scrollable height including overflow. Read-only.
// ? Equals clientHeight if no vertical overflow.
// ? Use case: Auto-scrolling to bottom of chat, detecting overflow.

// * element.style
// ? Returns a CSSStyleDeclaration object representing the element's inline style.
// ? Properties are camelCase: element.style.backgroundColor = "red".
// ? Only reads inline styles, not computed styles.
// ? Use case: Setting CSS properties dynamically.

// * element.computedStyleMap()
// ? Returns a StylePropertyMapReadOnly for computed styles. Part of CSS Typed OM.
// ? Use case: Typed access to computed styles.

// * element.shadowRoot
// ? Returns the ShadowRoot of the element if it has an open shadow DOM.
// ? Returns null if closed mode or no shadow root.
// ? Use case: Accessing web component internals (when mode: 'open').

// * element.attachShadow(init)
// ? Creates and attaches a shadow DOM tree to the element.
// ? 'init': { mode: 'open' | 'closed', delegatesFocus: boolean, slotAssignment: 'manual' | 'named' }
// ? Returns the ShadowRoot.
// ? Use case: Building Web Components with encapsulated styles/HTML.

// * element.children
// ? (Inherited from ParentNode mixin) Returns LIVE HTMLCollection of child ELEMENTS.
// ? Use case: Iterating element children.

// * element.firstElementChild / lastElementChild
// ? (Inherited) First/last child that is an element.

// * element.childElementCount
// ? (Inherited) Number of child elements. Same as children.length.
// ? Use case: Checking how many element children exist.

// * element.previousElementSibling / nextElementSibling
// ? (Inherited) Previous/next sibling that is an element.

// * element.getAnimations()
// ? Returns array of Animation objects affecting this element.
// ? Use case: Controlling element's animations.

// * element.animate(keyframes, options)
// ? (Web Animations API) Animates the element. Returns Animation object.
// ? 'keyframes': Array of keyframe objects or property-indexed keyframes.
// ? 'options': { duration, easing, iterations, delay, fill, direction }.
// ? Use case: Smooth, performant animations without CSS.

// * element.getAttributeNames()
// ? Returns array of attribute names present on element.

// * element.closest(selector)
// ? Returns closest ancestor (including self) matching selector. Null if none.
// ? Use case: Event delegation, finding containing component.

// * element.matches(selector)
// ? Returns true if element matches selector. Use case: Checking element state.

// * element.querySelector(selector) / querySelectorAll(selector)
// ? Same as document methods but scoped to the element's descendants.
// ? Use case: Searching within a component.

// * element.getElementsByClassName / getElementsByTagName / getElementsByName
// ? Same as document methods but scoped to element. Returns LIVE collections.
// ? Use case: Scoped element retrieval.

// * element.requestFullscreen(options)
// ? Makes element take over full screen. Returns Promise.
// ? Use case: Fullscreen video, games, slideshows.

// * element.requestPointerLock()
// ? Locks mouse pointer to element. Use case: FPS game camera control.

// * element.focus(options)
// ? Sets keyboard focus to element. 'options': { preventScroll: boolean }.
// ? Use case: Focusing input fields after validation errors.

// * element.blur()
// ? Removes keyboard focus from element.
// ? Use case: Programmatically dismissing input.

// * element.scroll(options) / scrollTo(options) / scrollBy(options)
// ? Scrolls element to/relative to position.
// ? 'options': { top, left, behavior: 'smooth'|'auto' }.
// ? Use case: Scrolling to sections within containers.

// * element.scrollIntoView(options)
// ? Scrolls element into viewport. 'options': { behavior, block, inline }.
// ? Use case: Jumping to validation errors, navigating to content.

// * element.insertAdjacentElement / insertAdjacentHTML / insertAdjacentText
// ? (Inherited from Element mixin) Positional insertion methods.

// * element.prepend / append / before / after / replaceWith / remove
// ? (Inherited from ChildNode mixin) DOM manipulation methods.

// * element.getClientRects()
// ? Returns a DOMRectList of bounding rectangles for each CSS border box.
// ? For inline elements, may return multiple rectangles (one per line).
// ? Use case: Advanced hit testing, text selection positioning.

// * element.getBoundingClientRect()
// ? Returns a single DOMRect combining all client rects. Most commonly used.
// ? DOMRect has: x, y, width, height, top, right, bottom, left.
// ? Coordinates relative to viewport (NOT document).
// ? Use case: Positioning tooltips, dropdowns, checking visibility.

// * element.getBoxQuads(options)
// ? (Experimental) Returns DOMQuad objects representing element's CSS fragments.
// ? Use case: Advanced layout analysis.

// * element.setPointerCapture(pointerId)
// ? Captures pointer events to this element, even if pointer moves outside.
// ? Use case: Drag operations, custom sliders.

// * element.releasePointerCapture(pointerId)
// ? Releases pointer capture.
// ? Use case: Ending drag operations.

// * element.hasPointerCapture(pointerId)
// ? Returns true if element has captured the specified pointer.
// ? Use case: Checking capture state.

// * element.checkVisibility(options)
// ? Returns boolean if element is potentially visible.
// ? 'options': { checkOpacity, checkVisibilityCSS }.
// ? Use case: Efficient visibility checking.

// * element.getHTML(options)
// ? Returns HTML string of element's subtree. Part of HTML Sanitizer API.
// ? 'options': { serializableShadowRoots, shadowRoots }.
// ? Use case: Serializing component content.

// * element.setHTMLUnsafe(html) / setHTML(html, options)
// ? setHTMLUnsafe: Parses HTML string and replaces children (like innerHTML).
// ? setHTML: Sanitizes HTML before insertion. Part of HTML Sanitizer API.
// ? Use case: Safe HTML content injection.

// * element.addEventListener / removeEventListener / dispatchEvent
// ? Event handling methods inherited from EventTarget.
// ? Use case: Interactive behaviors.

// * element.getAttributeNS / setAttributeNS / removeAttributeNS / hasAttributeNS
// ? Namespace-aware attribute methods. For SVG/XML.
// ? Use case: Working with XML namespaces.

// * element.toggleAttribute(qualifiedName, force)
// ? Toggles boolean attribute. Returns true if present after toggle.
// ? Use case: Toggling disabled state, open state.

// * element.role
// ? Gets/sets ARIA role (accessibility). "button", "navigation", etc.
// ? Use case: ARIA compliance.

// * element.ariaLive / element.ariaAtomic / element.ariaRelevant / etc.
// ? Properties for ARIA attributes, e.g., element.ariaLabel = "Close dialog".
// ? camelCase: aria-label becomes ariaLabel, aria-labelledby becomes ariaLabelledby.
// ? Use case: Dynamic accessibility updates.


//! ======================================================================
//! 6. ELEMENT - COMMON HTML ELEMENT PROPERTIES (HTMLElement)
//! ======================================================================
//? HTMLElement adds properties common to all HTML elements, like focus,
//? editing, styling, and microdata. All HTML elements inherit these.

// * element.hidden
// ? Boolean to hide/show element without CSS. UA stylesheet applies display:none.
// ? More semantic than manual display toggling.

// * element.contentEditable
// ? String: "true" makes element editable, "false" makes it read-only, "inherit" copies from parent.

// * element.isContentEditable
// ? Boolean: true if element is actually editable (resolved inheritance).

// * element.draggable
// ? Boolean enabling HTML Drag and Drop API.

// * element.spellcheck
// ? Boolean for enabling/disabling spell checking on editable content.

// * element.translate
// ? Boolean: false prevents Google Translate from translating this element's text.

// * element.title
// ? String: Tooltip text displayed on hover.

// * element.tabIndex
// ? Integer: tab order. -1 makes it focusable only programmatically (not via Tab key).

// * element.accessKey
// ? String: Single character used as keyboard shortcut to access element.

// * element.enterKeyHint
// ? String: Virtual keyboard Enter key label. Values: "enter", "done", "go", "next", "previous", "search", "send".
// ? Use case: Mobile UX - showing "Send" on chat input keyboard.

// * element.inputMode
// ? String: Hint for virtual keyboard type. "text", "decimal", "numeric", "tel", "search", "email", "url".
// ? Use case: Showing numeric keypad on mobile for number inputs.

// * element.autocapitalize
// ? String: Controls automatic capitalization. "none", "sentences", "words", "characters".
// ? Use case: Preventing autocapitalize on email fields.

// * element.autofocus
// ? Boolean: true if element should automatically get focus on page load.
// ? Use case: Setting which field receives immediate keyboard input.

// * element.lang
// ? String: Language of element content.

// * element.dir
// ? String: Text direction "ltr", "rtl", "auto".

// * element.dataset
// ? DOMStringMap of data-* attributes converted to camelCase keys.

// * element.nonce
// ? String: Cryptographic nonce for Content Security Policy.

// * element.style
// ? CSSStyleDeclaration for inline styles.

// * element.offsetParent / offsetTop / offsetLeft / offsetWidth / offsetHeight
// ? Position and dimension properties relative to offsetParent.

// * element.clientTop / clientLeft / clientWidth / clientHeight
// ? Inner dimension properties excluding borders/scrollbars.

// * element.scrollTop / scrollLeft / scrollWidth / scrollHeight
// ? Scroll-related properties.

// * element.oncopy / oncut / onpaste
// ? Clipboard event handlers for copy, cut, paste operations.
// ? Use case: Customizing clipboard behavior.

// * element.onfullscreenchange / onfullscreenerror
// ? Fullscreen event handlers.

// * element.onanimationstart / onanimationend / onanimationiteration
// ? CSS animation lifecycle event handlers.

// * element.ontransitionstart / ontransitionend / ontransitionrun / ontransitioncancel
// ? CSS transition lifecycle event handlers.

// * element.oninvalid
// ? Fires when form element fails validation.
// ? Use case: Custom validation UI.

// * element.onpointercancel / onpointerdown / onpointermove / onpointerup / onpointerover / etc.
// ? Pointer Events API handlers (unified mouse/touch/stylus).

// * element.ongotpointercapture / onlostpointercapture
// ? Pointer capture event handlers.

// * element.onwheel
// ? Mouse wheel event handler.

// * element.onselect / onselectstart / onselectionchange
// ? Text selection event handlers.

// * element.onbeforeinput / oninput
// ? Input events (before actual modification, and after).

// * element.onchange
// ? Fires when form element value changes and element loses focus.

// * element.onsubmit / onreset
// ? Form submission and reset event handlers.

// * element.onfocus / onblur
// ? Focus and blur event handlers.

// * element.onclick / ondblclick / onmousedown / onmouseup / onmouseover / onmouseout / onmousemove
// ? Mouse event handlers.

// * element.onkeydown / onkeypress / onkeyup
// ? Keyboard event handlers.

// * element.ontouchstart / ontouchend / ontouchmove / ontouchcancel
// ? Touch event handlers.

// * element.ondrag / ondragstart / ondragend / ondragenter / ondragover / ondragleave / ondrop
// ? Drag and Drop event handlers.

// * element.onscroll
// ? Scroll event handler (for the element itself).

// * element.oncontextmenu
// ? Right-click context menu event handler.

// * element.ongesturestart / ongesturechange / ongestureend
// ? (Safari/iOS) Multi-touch gesture event handlers.

// * element.onresize
// ? (ResizeObserver recommended instead) Element resize event.


//! ======================================================================
//! 7. FORM ELEMENT PROPERTIES (HTMLFormElement)
//! ======================================================================
//? HTMLFormElement provides properties specific to <form> elements,
//? including accessing form controls, validation, and submission.

// * form.elements
// ? Returns live HTMLFormControlsCollection of all form controls (input, select, textarea, button).
// ? Can access by name or index: form.elements['username'] or form.elements[0].
// ? Use case: Iterating form fields, accessing values.

// * form.length
// ? Returns number of form controls in the form.
// ? Use case: Checking number of fields.

// * form.name
// ? Gets/sets the form's name attribute.
// ? Use case: Identifying form in multi-form pages.

// * form.method
// ? Gets/sets HTTP method: "get" or "post" (or "dialog").
// ? Use case: Changing submission method dynamically.

// * form.action
// ? Gets/sets the URL where form data is sent on submission.
// ? Use case: Dynamic form action based on selections.

// * form.target
// ? Gets/sets where to display response: "_self", "_blank", "_parent", "_top", or iframe name.
// ? Use case: Submitting form to new tab.

// * form.enctype
// ? Gets/sets encoding type: "application/x-www-form-urlencoded" (default), "multipart/form-data" (file upload), "text/plain".
// ? Use case: Adding file upload capability dynamically.

// * form.encoding
// ? Alias for enctype. Gets/sets form encoding type.

// * form.acceptCharset
// ? Gets/sets character encodings accepted by server (space-separated).
// ? Use case: Specifying UTF-8 requirement.

// * form.autocomplete
// ? Gets/sets whether browser should autofill form: "on" or "off".
// ? Use case: Disabling autocomplete for sensitive forms.

// * form.noValidate
// ? Boolean. Gets/sets whether form validation should be skipped.
// ? Set to true to bypass built-in validation.
// ? Use case: Custom validation handling.

// * form.checkValidity()
// ? Returns true if ALL form controls satisfy their validation constraints.
// ? Triggers invalid events on failing controls.
// ? Use case: Manual form validation check.

// * form.reportValidity()
// ? Returns true if all controls valid. If not, displays validation errors to user.
// ? Triggers browser's native error bubbles.
// ? Use case: Showing validation feedback.

// * form.requestSubmit(submitter)
// ? Submits form as if user clicked 'submitter' button (respects validation).
// ? Use case: Programmatic submission that respects constraints.

// * form.submit()
// ? Submits form DIRECTLY. Does NOT trigger submit event or validate.
// ? Use case: Forced submission (use requestSubmit for modern approach).

// * form.reset()
// ? Resets all form controls to their initial values.
// ? Triggers reset event.
// ? Use case: Clear form buttons.

// * form.querySelector / querySelectorAll / getElementsByTagName / etc.
// ? Standard DOM methods scoped to the form.
// ? Use case: Finding specific fields within form.


//! ======================================================================
//! 8. INPUT ELEMENT PROPERTIES (HTMLInputElement)
//! ======================================================================
//? HTMLInputElement represents <input> elements with type-specific behavior.

// * input.type
// ? Gets/sets the input type: "text", "password", "checkbox", "radio", "file", "number", "date", etc.
// ? Changing type dynamically transforms the input behavior.
// ? Use case: Password reveal/hide toggle.

// * input.value
// ? Gets/sets the current value of the input as a string.
// ? For file inputs, returns "C:\fakepath\filename" (read-only).
// ? Use case: Reading/writing form field content.

// * input.valueAsDate
// ? Gets/sets value as JavaScript Date object. For date/time inputs.
// ? Returns null if no valid date. Use case: Date picker integration.

// * input.valueAsNumber
// ? Gets/sets value as a floating-point number. For number/range inputs.
// ? Returns NaN if no valid number.
// ? Use case: Numeric calculations with form data.

// * input.name
// ? Gets/sets the name attribute (key used in form submission).
// ? Use case: Dynamic form field naming.

// * input.defaultValue
// ? Returns the original value from the HTML attribute (before user changes).
// ? Read-only. Use case: Comparing current vs original.

// * input.checked
// ? Boolean. Gets/sets checked state for checkbox/radio inputs.
// ? Use case: Programmatic toggle, reading checkbox state.

// * input.defaultChecked
// ? Boolean. Returns the initial checked attribute state. Read-only.
// ? Use case: Reset logic.

// * input.indeterminate
// ? Boolean. Sets checkbox to indeterminate state (dash instead of check).
// ? Visual only, does not affect value. Used for "select all" with partial selection.
// ? Use case: Tree checkboxes, multi-select headers.

// * input.files
// ? Returns a FileList of selected files (for type="file"). Read-only.
// ? Each file has name, size, type, lastModified properties.
// ? Use case: File upload preview, validation.

// * input.accept
// ? Gets/sets accepted file types for file input ("image/*", ".pdf", "video/mp4").
// ? Use case: Filtering file picker dialog.

// * input.multiple
// ? Boolean. Gets/sets whether multiple files can be selected.
// ? Use case: Multi-file upload toggling.

// * input.placeholder
// ? Gets/sets placeholder text shown when input is empty.
// ? Use case: Dynamic placeholder updates.

// * input.required
// ? Boolean. Gets/sets whether input must be filled before form submission.
// ? Use case: Conditional required fields.

// * input.disabled
// ? Boolean. Gets/sets whether input is disabled (grayed out, not submittable).
// ? Use case: Conditional field enabling.

// * input.readOnly
// ? Boolean. Input value cannot be changed but is still submittable and focusable.
// ? Different from disabled: readonly values are submitted, disabled are not.
// ? Use case: Calculated fields, user info display.

// * input.autofocus
// ? Boolean. Input automatically gets focus on page load.
// ? Use case: Setting primary input field.

// * input.autocomplete
// ? Gets/sets autocomplete hint: "on", "off", "username", "email", "new-password", etc.
// ? Use case: Password field autofill control.

// * input.min / input.max
// ? Gets/sets minimum/maximum values for number, range, date inputs.
// ? Use case: Dynamic range constraints.

// * input.minLength / input.maxLength
// ? Gets/sets character length constraints for text inputs.
// ? Use case: Dynamic validation rules.

// * input.step
// ? Gets/sets increment step for number/range inputs. "any" allows any value.
// ? Use case: Setting granularity of numeric input.

// * input.pattern
// ? Gets/sets regex pattern for validation (string, not RegExp object).
// ? Use case: Dynamic validation patterns.

// * input.size
// ? Gets/sets visible width in characters (for text inputs).
// ? Use case: Adjusting input width.

// * input.selectionStart / input.selectionEnd
// ? Gets/sets cursor position/selection range within input text.
// ? Use case: Manipulating cursor position, inserting text at cursor.

// * input.selectionDirection
// ? Gets/sets selection direction: "forward", "backward", "none".
// ? Use case: RTL text selection handling.

// * input.validity
// ? Returns ValidityState object with validation flags:
// ? valid, valueMissing, typeMismatch, patternMismatch, tooLong, tooShort,
// ? rangeUnderflow, rangeOverflow, stepMismatch, badInput, customError.
// ? Use case: Custom validation messages.

// * input.validationMessage
// ? Returns the browser's localized validation error message string.
// ? Empty string if valid.
// ? Use case: Displaying native validation messages.

// * input.willValidate
// ? Returns true if input will be validated on form submission.
// ? False for disabled, readonly, or hidden inputs.
// ? Use case: Checking if validation applies.

// * input.checkValidity()
// ? Returns true if input satisfies all constraints. Triggers invalid event.
// ? Use case: Single field validation.

// * input.reportValidity()
// ? Returns true and shows validation error bubble if invalid.
// ? Use case: Triggering native validation UI.

// * input.setCustomValidity(message)
// ? Sets a custom validation error message. Empty string clears error.
// ? Sets validity.customError = true.
// ? Use case: Custom validation rules.

// * input.labels
// ? Returns NodeList of <label> elements associated with this input.
// ? Use case: Accessing labels for styling, clicking.

// * input.form
// ? Returns the parent <form> element, or null if not inside a form.
// ? Use case: Finding form reference from field.

// * input.formAction / formMethod / formEnctype / formTarget / formNoValidate
// ? Overrides form's action/method/enctype/target/novalidate for this specific submit button/image.
// ? Use case: Multiple submit buttons with different actions.

// * input.stepUp(n) / stepDown(n)
// ? Increments/decrements value by n steps. Used for number/range inputs.
// ? Use case: Custom increment/decrement buttons.

// * input.select()
// ? Selects all text in the input.
// ? Use case: Select all on focus.

// * input.setSelectionRange(start, end, direction)
// ? Programmatically selects a portion of text in the input.
// ? Use case: Partial text selection.

// * input.setRangeText(replacement, start, end, selectMode)
// ? Replaces a range of text with new text.
// ? Use case: Masked inputs, text formatting.

// * input.files
// ? For file inputs: returns FileList of selected files.

// * input.webkitdirectory
// ? Boolean. Allows selecting directories instead of files (Chrome).
// ? Use case: Folder upload.

// * input.webkitEntries
// ? Returns FileSystemEntry array for directory upload (Chrome).
// ? Use case: Reading directory structure.

// * input.list
// ? Returns the <datalist> element associated with this input.
// ? Use case: Accessing autocomplete options.

// * input.height / input.width
// ? Gets/sets dimensions for image input type (type="image").
// ? Use case: Sizing image submit buttons.

// * input.alt / input.src
// ? For image inputs: alternative text and source URL.
// ? Use case: Image button configuration.

// * input.form
// ? Returns associated form element.

// * input.defaultValue
// ? Original value attribute value before modification.


//! ======================================================================
//! 9. SELECT ELEMENT PROPERTIES (HTMLSelectElement)
//! ======================================================================
//? HTMLSelectElement represents <select> dropdown elements.

// * select.value
// ? Gets/sets the value of the currently selected option.
// ? If multiple, returns first selected option's value.
// ? Setting selects the option with matching value (deselects others unless multiple).
// ? Use case: Reading/setting dropdown selection.

// * select.selectedIndex
// ? Gets/sets the index of selected option. -1 if none selected.
// ? For multiple select, returns index of first selected.
// ? Use case: Getting position of selection.

// * select.selectedOptions
// ? Returns LIVE HTMLCollection of all currently selected <option> elements.
// ? Use case: Iterating multiple selections.

// * select.options
// ? Returns LIVE HTMLOptionsCollection of all <option> elements.
// ? Can add/remove options: select.options.add(option, beforeIndex).
// ? Use case: Dynamic dropdown population.

// * select.length
// ? Gets/sets the number of option elements.
// ? Setting larger adds empty options; setting smaller removes extras.
// ? Use case: Truncating/expanding dropdown.

// * select.multiple
// ? Boolean. Gets/sets whether multiple options can be selected.
// ? Use case: Toggling multi-select mode.

// * select.name
// ? Gets/sets the name attribute for form submission.
// ? Use case: Dynamic form field naming.

// * select.required
// ? Boolean. Gets/sets whether selection is required.
// ? Use case: Validation control.

// * select.disabled
// ? Boolean. Gets/sets disabled state.
// ? Use case: Conditional enabling.

// * select.size
// ? Gets/sets number of visible rows (scrollable list instead of dropdown).
// ? > 1 shows as listbox. Default is 0/1 (dropdown).
// ? Use case: Showing multi-select list.

// * select.type
// ? Returns "select-one" or "select-multiple" based on multiple attribute. Read-only.
// ? Use case: Checking select behavior.

// * select.form
// ? Returns parent form element.
// ? Use case: Form reference.

// * select.labels
// ? Returns associated <label> elements.
// ? Use case: Label access.

// * select.willValidate / checkValidity / reportValidity / validity / validationMessage
// ? Standard validation properties. Same as input element.

// * select.setCustomValidity(message)
// ? Sets custom validation error.

// * select.item(index)
// ? Returns option at given index. Same as select.options[index].
// ? Use case: Indexed access.

// * select.namedItem(name)
// ? Returns option with matching name or id attribute.
// ? Use case: Named access.

// * select.add(option, before)
// ? Adds an option element. 'before': null (append) or reference option (insert before).
// ? Use case: Adding new options.

// * select.remove(index)
// ? Removes option at specified index.
// ? Use case: Removing options dynamically.

// * select.checkValidity() / reportValidity()
// ? Validation methods.

// * HTMLOptionElement properties (accessed via option element):
// * option.value
// ? Gets/sets option's value attribute.
// * option.text
// ? Gets/sets option's displayed text content.
// * option.selected
// ? Boolean. Gets/sets whether option is selected.
// * option.defaultSelected
// ? Boolean. Original selected attribute state. Read-only.
// * option.index
// ? Returns index of option within its select. Read-only.
// * option.disabled
// ? Boolean. Gets/sets whether option is disabled.
// * option.label
// ? Gets/sets label attribute (displayed text, falls back to text content).
// * option.form
// ? Returns parent form.


//! ======================================================================
//! 10. TEXTAREA ELEMENT PROPERTIES (HTMLTextAreaElement)
//! ======================================================================
//? HTMLTextAreaElement represents <textarea> multi-line text inputs.

// * textarea.value
// ? Gets/sets the text content. Accessible as textarea.value.
// ? Use case: Reading/writing textarea content.

// * textarea.defaultValue
// ? Original text content between <textarea> tags. Read-only.
// ? Use case: Reset to original content.

// * textarea.name / disabled / readOnly / required / placeholder
// ? Standard form control properties.

// * textarea.rows / textarea.cols
// ? Gets/sets visible rows and columns (character width).
// ? Use case: Adjusting textarea size.

// * textarea.wrap
// ? Gets/sets wrap behavior: "hard" (submits newlines), "soft" (visual only).
// ? Use case: Controlling line break submission.

// * textarea.maxLength / minLength
// ? Gets/sets character limits.

// * textarea.selectionStart / selectionEnd / selectionDirection
// ? Cursor/selection management same as input.

// * textarea.select() / setSelectionRange() / setRangeText()
// ? Text selection methods.

// * textarea.autocomplete / autofocus / dirName / spellcheck
// ? Standard HTML element attributes.

// * textarea.form / labels / type / validity / willValidate
// ? Standard form and validation properties.

// * textarea.textLength
// ? Returns the length of current value. Read-only.
// ? Use case: Character count for limits.


//! ======================================================================
//! 11. IMAGE ELEMENT PROPERTIES (HTMLImageElement)
//! ======================================================================
//? HTMLImageElement represents <img> elements.

// * img.src
// ? Gets/sets the image source URL. Changing triggers image load.
// ? Use case: Dynamic image swapping.

// * img.srcset
// ? Gets/sets responsive image source set (for different resolutions/sizes).
// ? Use case: Responsive image selection.

// * img.sizes
// ? Gets/sets sizes attribute for responsive images.
// ? Use case: Telling browser image display size.

// * img.currentSrc
// ? Returns the URL of the currently loaded/displayed image. Read-only.
// ? Use case: Knowing which responsive image was selected.

// * img.alt
// ? Gets/sets alternative text for accessibility and fallback.
// ? Use case: Dynamic alt text updates.

// * img.width / img.height
// ? Gets/sets the DISPLAY width/height in CSS pixels (not native size).
// ? Use case: Resizing images.

// * img.naturalWidth / img.naturalHeight
// ? Returns the INTRINSIC/original width and height of the image file. Read-only.
// ? Returns 0 if image not loaded.
// ? Use case: Getting actual image dimensions.

// * img.complete
// ? Returns true if image has finished loading (successfully or with error). Read-only.
// ? Use case: Checking if image is ready.

// * img.loading
// ? Gets/sets lazy loading: "lazy" or "eager".
// ? Use case: Enabling/disabling lazy loading dynamically.

// * img.decoding
// ? Gets/sets decoding hint: "sync", "async", "auto".
// ? Use case: Controlling when image is decoded.

// * img.crossOrigin
// ? Gets/sets CORS setting: "anonymous" (no credentials) or "use-credentials".
// ? Use case: Canvas toDataURL compatibility.

// * img.referrerPolicy
// ? Gets/sets referrer policy for image requests.
// ? Use case: Privacy control for image loading.

// * img.useMap
// ? Gets/sets #usemap reference for image maps.
// ? Use case: Associating image with <map> element.

// * img.isMap
// ? Boolean. Gets/sets whether image is a server-side image map.
// ? Use case: Server-side click coordinates.

// * img.longDesc
// ? (Deprecated) URL for long description. Not used.

// * img.lowSrc
// ? (Deprecated) Low-resolution placeholder source. Use srcset instead.

// * img.x / img.y
// ? (Deprecated) Image map coordinates. Read-only.

// * img.align / border / hspace / vspace
// ? (Deprecated) Layout attributes. Use CSS instead.

// * img.decode()
// ? Returns Promise that resolves when image is decoded and ready to append to DOM.
// ? Prevents decoding jank when adding images.
// ? Use case: Smooth image insertion.

// * img.fetchPriority
// ? Gets/sets fetch priority hint: "high", "low", "auto".
// ? Use case: Prioritizing above-fold images.

// * img.attributionSrc
// ? (Experimental) Attribution Reporting API source for images.


//! ======================================================================
//! 12. ANCHOR/LINK ELEMENT PROPERTIES (HTMLAnchorElement)
//! ======================================================================
//? HTMLAnchorElement represents <a> (anchor/link) elements.

// * anchor.href
// ? Gets/sets the full resolved URL. Setting navigates if user clicks.
// ? Getting returns absolute URL, even if attribute set relatively.
// ? Use case: Reading/updating link destinations.

// * anchor.target
// ? Gets/sets where to open: "_self", "_blank", "_parent", "_top", or frame name.
// ? Use case: Dynamic target control.

// * anchor.download
// ? Gets/sets filename for downloading resource instead of navigating.
// ? Use case: Setting download filename dynamically.

// * anchor.rel
// ? Gets/sets relationship between current and linked resource.
// ? Values: "noopener", "noreferrer", "nofollow", "noindex", etc.
// ? Use case: Security attribute management.

// * anchor.relList
// ? Returns DOMTokenList of rel values. Easier than string parsing.
// ? Use case: Adding/removing individual rel values.

// * anchor.hreflang
// ? Gets/sets language of the linked resource.
// ? Use case: Language indication.

// * anchor.type
// ? Gets/sets MIME type hint of the linked resource.
// ? Use case: Indicating file type.

// * anchor.referrerPolicy
// ? Gets/sets referrer policy for navigation.
// ? Use case: Privacy control.

// * anchor.ping
// ? Gets/sets space-separated URLs to ping on navigation.
// ? Use case: Click tracking.

// * anchor.origin / protocol / host / hostname / port / pathname / search / hash
// ? Read-only URL components of the href. Same as location object properties.
// ? Use case: URL analysis of links.

// * anchor.username / password
// ? Gets/sets username/password in URL (deprecated for security).
// ? Use case: Rarely used.

// * anchor.toString()
// ? Returns href string. Same as anchor.href.

// * anchor.text
// ? Gets/sets the text content of the anchor.
// ? Use case: Updating link text.


//! ======================================================================
//! 13. TABLE ELEMENT PROPERTIES (HTMLTableElement)
//! ======================================================================
//? HTMLTableElement provides special properties for <table> manipulation.

// * table.caption
// ? Gets/sets the <caption> element. Returns null if absent.
// ? Setting creates a new caption if none exists.
// ? Use case: Dynamic table titles.

// * table.tHead
// ? Gets/sets the <thead> element. Returns null if none.
// ? Use case: Header management.

// * table.tFoot
// ? Gets/sets the <tfoot> element. Returns null if none.
// ? Use case: Footer management.

// * table.tBodies
// ? Returns LIVE HTMLCollection of <tbody> elements.
// ? Use case: Iterating table bodies.

// * table.rows
// ? Returns LIVE HTMLCollection of ALL rows (<tr>) in the table.
// ? Includes rows in thead, tfoot, tbody. Read-only.
// ? Use case: Iterating all rows.

// * table.createCaption()
// ? Creates and returns a <caption> element if none exists. Returns existing if present.
// ? Use case: Ensuring table has caption.

// * table.deleteCaption()
// ? Deletes the <caption> element if it exists.
// ? Use case: Removing caption.

// * table.createTHead()
// ? Creates and returns <thead> element if none exists. Returns existing if present.
// ? Use case: Ensuring table has header.

// * table.deleteTHead()
// ? Deletes <thead> element if exists.
// ? Use case: Removing header.

// * table.createTFoot()
// ? Creates and returns <tfoot> element if none exists.
// ? Use case: Ensuring table has footer.

// * table.deleteTFoot()
// ? Deletes <tfoot> element if exists.
// ? Use case: Removing footer.

// * table.createTBody()
// ? Creates and returns a new <tbody> element, inserting into the table.
// ? Use case: Adding new body sections.

// * table.insertRow(index)
// ? Creates new <tr> and inserts at specified index. -1 appends at end.
// ? Returns the new row element.
// ? Use case: Adding rows dynamically.

// * table.deleteRow(index)
// ? Deletes row at given index. -1 deletes last row.
// ? Use case: Removing rows.

// * HTMLTableRowElement (tr) properties:
// * tr.cells - Returns live HTMLCollection of <td>/<th> cells.
// * tr.rowIndex - Logical index of row in table (includes all sections).
// * tr.sectionRowIndex - Index of row within its section (thead/tbody/tfoot).
// * tr.insertCell(index) - Creates new cell at index. -1 appends.
// * tr.deleteCell(index) - Deletes cell at index.

// * HTMLTableCellElement (td/th) properties:
// * cell.cellIndex - Returns index of cell within its row.
// * cell.colSpan / rowSpan - Gets/sets column/row span.
// * cell.headers - Gets/sets space-separated header IDs (ARIA).
// * cell.scope - Gets/sets scope for th elements: "row", "col", "rowgroup", "colgroup".
// * cell.abbr - Gets/sets abbreviated header text.
// * cell.width / height (Deprecated) - Use CSS instead.
// * cell.noWrap (Deprecated) - Use CSS white-space instead.
// * cell.bgColor (Deprecated) - Use CSS background-color.


//! ======================================================================
//! 14. STYLE ELEMENT PROPERTIES (HTMLStyleElement / CSSStyleSheet)
//! ======================================================================
//? HTMLStyleElement represents <style> elements. CSSStyleSheet represents
//? the stylesheet itself (also for <link rel="stylesheet">).

// * styleElement.sheet
// ? Returns the CSSStyleSheet object for this <style>. Read-only.
// ? Returns null if not in DOM or not yet loaded.
// ? Use case: Accessing stylesheet rules.

// * styleElement.media
// ? Gets/sets media attribute (e.g., "screen and (max-width: 600px)").
// ? Use case: Changing media query dynamically.

// * styleElement.type
// ? Gets/sets type attribute. Always "text/css". Read-only in practice.
// ? Use case: None.

// * styleElement.disabled
// ? Boolean. Gets/sets whether stylesheet is applied.
// ? Use case: Toggling themes without removing elements.

// * styleElement.scoped (Deprecated)
// ? Boolean. Scoped styles within parent element. Removed from spec.

// * styleElement.blocking
// ? Gets/sets whether stylesheet blocks rendering. Experimental.

// * CSSStyleSheet properties (via sheet property or document.styleSheets):
// * stylesheet.ownerRule - The @import rule that imported this sheet (or null).
// * stylesheet.cssRules - Returns CSSRuleList of all rules in the stylesheet.
// * stylesheet.rules (Deprecated) - Use cssRules.
// * stylesheet.insertRule(rule, index) - Inserts CSS rule at position. Returns index.
// * stylesheet.deleteRule(index) - Deletes rule at index.
// * stylesheet.replace(text) / replaceSync(text) - Replaces entire stylesheet (Constructed Stylesheets).
// * stylesheet.disabled - Boolean. Enable/disable entire stylesheet.
// * stylesheet.href - URL of stylesheet (null for inline <style>).
// * stylesheet.media - MediaList of applicable media.
// * stylesheet.ownerNode - The <style> or <link> element owning this sheet.
// * stylesheet.parentStyleSheet - Parent sheet if imported via @import.
// * stylesheet.title - Title attribute of owner element.
// * stylesheet.type - "text/css".

// * CSSStyleDeclaration (element.style):
// * style.cssText - Gets/sets full inline style as string.
// * style.length - Number of explicitly set style properties.
// * style.item(index) - Returns property name at index.
// * style.getPropertyValue(property) - Returns property value.
// * style.getPropertyPriority(property) - Returns "important" or "".
// * style.setProperty(property, value, priority) - Sets property with optional !important.
// * style.removeProperty(property) - Removes property, returns old value.

// * getComputedStyle(element, pseudoElement)
// ? Window method returning LIVE CSSStyleDeclaration of COMPUTED styles.
// ? Reflects all CSS after cascading, including inherited values.
// ? Read-only. Values are in absolute units (px, rgb()).
// ? Example: getComputedStyle(div).width returns "400px" not "50%".
// ? Use case: Reading actual rendered styles.


//! ======================================================================
//! 15. SCRIPT ELEMENT PROPERTIES (HTMLScriptElement)
//! ======================================================================
//? HTMLScriptElement represents <script> elements.

// * script.src
// ? Gets/sets the external script URL.
// ? Use case: Dynamic script loading.

// * script.type
// ? Gets/sets script type: "text/javascript" (default), "module", "importmap".
// ? Use case: Loading ES modules.

// * script.async
// ? Boolean. Gets/sets whether script executes asynchronously.
// ? Valid only for external scripts. Download parallel, execute ASAP.
// ? Use case: Non-blocking script loading.

// * script.defer
// ? Boolean. Gets/sets whether script defers execution until DOM parsed.
// ? Executes in order, before DOMContentLoaded.
// ? Use case: DOM-dependent scripts.

// * script.crossOrigin
// ? Gets/sets CORS mode: "anonymous" or "use-credentials".
// ? Use case: Loading scripts from CDNs.

// * script.integrity
// ? Gets/sets Subresource Integrity (SRI) hash for security.
// ? Use case: Ensuring CDN scripts aren't tampered.

// * script.noModule
// ? Boolean. True for scripts that only run in non-module browsers.
// ? Use case: Fallback for legacy browsers.

// * script.referrerPolicy
// ? Gets/sets referrer policy for script request.

// * script.text / innerText / textContent
// ? Gets/sets the inline script content.
// ? Use case: Dynamically creating/modifying inline scripts.

// * script.charset
// ? (Deprecated) Character encoding of external script. Ignored in HTML5.

// * script.event (Deprecated)
// ? Event for which the script is intended. Never standardized.

// * script.htmlFor (Deprecated)
// ? Element ID the script binds to. Never standardized.

// * script.fetchPriority
// ? Gets/sets fetch priority: "high", "low", "auto".
// ? Use case: Prioritizing critical scripts.

// * script.blocking
// ? Experimental. Controls render-blocking behavior.


//! ======================================================================
//! 16. WINDOW OBJECT (DOM-related aspects)
//! ======================================================================
//? While window is BOM, several window methods directly relate to DOM.

// * window.getComputedStyle(element, pseudoElt)
// ? Returns computed CSSStyleDeclaration. See section 14.

// * window.matchMedia(mediaQueryString)
// ? Returns MediaQueryList object. Has matches (boolean) and addEventListener for changes.
// ? Use case: Responsive JavaScript behavior.

// * window.requestAnimationFrame(callback)
// ? Schedules DOM-anchored animation. Returns request ID.
// ? Use case: Smooth DOM animations.

// * window.cancelAnimationFrame(id)
// ? Cancels animation frame request.

// * window.resizeTo(width, height) / resizeBy(deltaX, deltaY)
// ? Resizes window. Only for window.open() windows.

// * window.scroll(options) / scrollTo / scrollBy
// ? Scrolls document. Options: { top, left, behavior }.

// * window.getSelection()
// ? Returns Selection object (same as document.getSelection()).

// * window.print()
// ? Opens print dialog.

// * window.btoa(string) / atob(string)
// ? Base64 encode/decode for data URIs, inline assets.

// * window.fetch(url, options)
// ? Network requests returning Promise. DOM-independent.

// * window.postMessage(message, targetOrigin, transfer)
// ? Cross-origin messaging between windows/frames.

// * window.queueMicrotask(callback)
// ? Schedules microtask (runs before next event loop task).

// * window.requestIdleCallback(callback, options)
// ? Schedules low-priority work during idle periods.

// * window.cancelIdleCallback(handle)
// ? Cancels idle callback.


//! ======================================================================
//! 17. CSS OBJECT MODEL (CSSOM) PROPERTIES
//! ======================================================================
//? The CSS Object Model provides JavaScript access to all CSS rules,
//? stylesheets, and computed styles.

// * document.styleSheets
// ? Returns StyleSheetList of all stylesheets in document.
// ? Includes external, inline <style>, and constructed stylesheets.

// * CSSStyleSheet.insertRule(rule, index)
// ? Inserts CSS rule string at position. Returns index.
// ? Example: sheet.insertRule("body { background: red; }", 0)
// ? Use case: Dynamic style injection.

// * CSSStyleSheet.deleteRule(index)
// ? Deletes rule at specified index.

// * CSSStyleSheet.replace(text) / replaceSync(text)
// ? Replaces all rules with new CSS text. Used with constructed stylesheets.

// * CSSStyleSheet.addRule(selector, styles, index) (Deprecated)
// ? Legacy method. Use insertRule.

// * CSSStyleSheet.removeRule(index) (Deprecated)
// ? Legacy method. Use deleteRule.

// * CSSRule properties (individual rule objects):
// * rule.type - Integer: STYLE_RULE (1), IMPORT_RULE (3), MEDIA_RULE (4), FONT_FACE_RULE (5), etc.
// * rule.cssText - Full text of the rule.
// * rule.parentRule - Parent rule if nested (e.g., inside @media).
// * rule.parentStyleSheet - The stylesheet containing this rule.
// * CSSStyleRule (type=1): selectorText, style (CSSStyleDeclaration).
// * CSSImportRule (type=3): href, media, styleSheet.
// * CSSMediaRule (type=4): media (MediaList), cssRules (nested rules).
// * CSSFontFaceRule (type=5): style (descriptors).
// * CSSKeyframesRule (type=7): name, cssRules.
// * CSSKeyframeRule (type=8): keyText, style.
// * CSSSupportsRule (type=12): conditionText, cssRules.
// * CSSCounterStyleRule (type=11): system, symbols, etc.

// * MediaQueryList (returned by matchMedia):
// * mql.matches - Boolean. True if media query currently matches.
// * mql.media - The media query string.
// * mql.addEventListener('change', callback) - Fires when match state changes.
// * mql.onchange - Event handler for changes.

// * CSS.supports(property, value)
// ? Returns true if browser supports CSS property-value combination.
// ? Example: CSS.supports('display', 'grid')
// ? Use case: CSS feature detection.

// * CSS.supports(conditionText)
// ? Same but with full CSS condition: CSS.supports('(display: grid)')
// ? Use case: Complex feature queries.

// * CSS.escape(string)
// ? Escapes special characters in CSS identifiers.
// ? Example: CSS.escape('.class#1') returns "\\.class\\#1"
// ? Use case: Sanitizing dynamic CSS selectors.

// * CSS.registerProperty(descriptor)
// ? Registers custom CSS properties (@property). Enables animation, type checking.
// ? descriptor: { name, syntax, inherits, initialValue }
// ? Use case: Typed custom properties.

// * CSS.paintWorklet
// ? Returns PaintWorklet for CSS Paint API (Houdini).
// ? Use case: Custom backgrounds, borders.

// * CSS.layoutWorklet
// ? Returns LayoutWorklet for CSS Layout API (Houdini).
// ? Use case: Custom layout modes.

// * CSS.animationWorklet
// ? Returns AnimationWorklet for threaded animations (Houdini).
// ? Use case: Performant custom animations.

// * CSS.highlights
// ? Returns Highlights object for CSS Custom Highlight API.
// ? Use case: Styling arbitrary text ranges.

// * CSS.number / CSS.percent / CSS.em / CSS.px / CSS.deg / etc.
// ? CSS Typed OM factory functions: CSS.px(10) creates CSSUnitValue.
// ? Use case: Typed CSS value manipulation.

// * CSSStyleValue.parse(property, cssText)
// ? Parses CSS text into typed CSSStyleValue.
// ? Use case: Type-safe style manipulation.

// * CSSStyleValue.parseAll(property, cssText)
// ? Parses list-style properties.

// * element.computedStyleMap()
// ? Returns StylePropertyMapReadOnly of computed styles (Typed OM).
// ? Use case: Typed access to computed values.

// * element.attributeStyleMap
// ? Returns StylePropertyMap of inline styles (Typed OM).
// ? Can set typed values: element.attributeStyleMap.set('width', CSS.px(200)).
// ? Use case: Typed inline style manipulation.

// * window.CSSStyleSheet()
// ? Constructor for creating constructed stylesheets.
// ? const sheet = new CSSStyleSheet(); sheet.replaceSync('body { color: red; }');
// ? document.adoptedStyleSheets = [sheet];
// ? Use case: Efficient Shadow DOM styling.

// * document.adoptedStyleSheets
// ? Array of constructed stylesheets applied to document/shadow root.
// ? Use case: Shared styles across components.

// * CSSStyleSheet.prototype.replace(text) / replaceSync(text)
// ? Methods for populating constructed stylesheets.

// * window.StylePropertyMap / StylePropertyMapReadOnly
// ? Typed OM interfaces for style properties.

// * window.CSSKeywordValue / CSSUnitValue / CSSTransformValue / CSSMathValue / etc.
// ? Typed OM value classes.

// * window.CSSStyleValue
// ? Base class for Typed OM values.

// * window.CSSVariableReferenceValue
// ? Represents var() references.

// * window.CSSUnparsedValue
// ? Represents custom property values.

// * window.CSSImageValue
// ? Represents image CSS values.

// * window.CSSNumericValue / CSSMathSum / CSSMathProduct / CSSMathMin / CSSMathMax / etc.
// ? Math operations in Typed OM.


//! ======================================================================
//! 18. EVENT INTERFACES (Common Event Objects)
//! ======================================================================
//? Every event handler receives an Event object (or subclass) with
//? information about what happened.

// * Event properties:
// * event.type - String: event name ("click", "keydown", etc.).
// * event.target - Element that triggered the event (innermost element).
// * event.currentTarget - Element the handler is attached to.
// * event.eventPhase - Integer: NONE(0), CAPTURING_PHASE(1), AT_TARGET(2), BUBBLING_PHASE(3).
// * event.bubbles - Boolean: whether event bubbles up through DOM.
// * event.cancelable - Boolean: whether event can be prevented.
// * event.defaultPrevented - Boolean: whether preventDefault() was called.
// * event.composed - Boolean: whether event crosses shadow DOM boundary.
// * event.timeStamp - High-resolution timestamp of when event was created.
// * event.isTrusted - Boolean: false if created by script, true if user-initiated.
// * event.preventDefault() - Cancels default browser behavior (link navigation, form submit).
// * event.stopPropagation() - Prevents further propagation (capturing/bubbling).
// * event.stopImmediatePropagation() - Stops propagation AND prevents other handlers on same element.
// * event.composedPath() - Returns array of nodes event will traverse (includes shadow roots).

// * MouseEvent extends Event:
// * event.clientX / clientY - Coordinates relative to viewport.
// * event.screenX / screenY - Coordinates relative to physical screen.
// * event.pageX / pageY - Coordinates relative to document (accounts for scroll).
// * event.offsetX / offsetY - Coordinates relative to target element's padding edge.
// * event.movementX / movementY - Mouse movement delta since last mousemove.
// * event.button - Which button: 0=left, 1=middle, 2=right.
// * event.buttons - Bitmask of currently pressed buttons.
// * event.altKey / ctrlKey / shiftKey / metaKey - Modifier key states.
// * event.relatedTarget - Secondary target for mouseenter/leave/over/out.

// * KeyboardEvent extends Event:
// * event.key - The key value ("a", "Enter", "ArrowUp", "F1", "Shift").
// * event.code - Physical key code ("KeyA", "Enter", "ArrowUp", "ShiftLeft").
// * event.keyCode (Deprecated) - Numeric key code. Use key or code.
// * event.charCode (Deprecated) - Unicode character code. Use key.
// * event.which (Deprecated) - Key/button number. Use key/button.
// * event.altKey / ctrlKey / shiftKey / metaKey - Modifier states.
// * event.repeat - Boolean: true if key is being held down (repeating).
// * event.isComposing - Boolean: true during IME composition.
// * event.location - Key location: STANDARD(0), LEFT(1), RIGHT(2), NUMPAD(3).
// * event.getModifierState(modifierKey) - Returns true if modifier is active.

// * FocusEvent extends Event:
// * event.relatedTarget - Element receiving focus (for blur) or losing focus (for focus).

// * InputEvent extends Event:
// * event.data - The inserted characters (for insertText) or deleted text.
// * event.inputType - Type of change: "insertText", "deleteContentBackward", "insertFromPaste", etc.
// * event.isComposing - Boolean: true during IME composition.
// * event.dataTransfer - DataTransfer for drag-drop operations (null for regular input).

// * WheelEvent extends MouseEvent:
// * event.deltaX / deltaY / deltaZ - Scroll amounts in pixels/lines/pages.
// * event.deltaMode - Unit: DOM_DELTA_PIXEL(0), DOM_DELTA_LINE(1), DOM_DELTA_PAGE(2).

// * TouchEvent extends Event:
// * event.touches - TouchList of all touch points on screen.
// * event.targetTouches - TouchList on the event target.
// * event.changedTouches - TouchList of touch points that changed.
// * event.altKey / ctrlKey / shiftKey / metaKey.
// * Touch: touch.identifier, touch.clientX/Y, touch.pageX/Y, touch.screenX/Y, touch.target.

// * PointerEvent extends MouseEvent:
// * event.pointerId - Unique identifier for the pointer.
// * event.pointerType - "mouse", "pen", "touch".
// * event.width / height - Contact geometry size.
// * event.pressure - Pressure from 0 to 1 (stylus support).
// * event.tangentialPressure - Barrel pressure.
// * event.tiltX / tiltY - Stylus tilt angles.
// * event.twist - Stylus rotation.
// * event.isPrimary - Boolean: true if primary pointer.

// * DragEvent extends MouseEvent:
// * event.dataTransfer - DataTransfer object containing dragged data.
// * DataTransfer: dropEffect, effectAllowed, files, items, types.
// * dataTransfer.setData(format, data) - Store data for drag.
// * dataTransfer.getData(format) - Retrieve dragged data.
// * dataTransfer.clearData(format) - Remove data.
// * dataTransfer.setDragImage(element, xOffset, yOffset) - Custom drag image.

// * ClipboardEvent extends Event:
// * event.clipboardData - DataTransfer containing clipboard data.
// * clipboardData.getData(format) - Read clipboard ("text/plain", "text/html").
// * clipboardData.setData(format, data) - Write to clipboard.

// * TransitionEvent extends Event:
// * event.propertyName - CSS property being transitioned.
// * event.elapsedTime - Seconds the transition has been running.
// * event.pseudoElement - Pseudo-element name (e.g., "::before") or "".

// * AnimationEvent extends Event:
// * event.animationName - Name of the animation.
// * event.elapsedTime - Seconds the animation has been running.
// * event.pseudoElement - Pseudo-element or "".

// * CustomEvent extends Event:
// * event.detail - Custom data passed when creating event.
// * new CustomEvent('myEvent', { detail: { key: 'value' } })

// * ErrorEvent extends Event:
// * event.message - Error message.
// * event.filename - Script file URL.
// * event.lineno - Line number.
// * event.colno - Column number.
// * event.error - The Error object.

// * PromiseRejectionEvent extends Event:
// * event.promise - The rejected Promise.
// * event.reason - The rejection reason (Error object or value).

// * PageTransitionEvent extends Event:
// * event.persisted - Boolean: true if page loaded from bfcache.

// * HashChangeEvent extends Event:
// * event.oldURL - Previous URL.
// * event.newURL - New URL.

// * PopStateEvent extends Event:
// * event.state - The state object passed to pushState/replaceState.

// * BeforeUnloadEvent extends Event:
// * event.returnValue - Set to string to trigger confirmation dialog.

// * SubmitEvent extends Event:
// * event.submitter - The submit button/input that triggered submission.

// * FormDataEvent extends Event:
// * event.formData - The FormData object being constructed.

// * StorageEvent extends Event:
// * event.key - The storage key that changed.
// * event.oldValue - Previous value.
// * event.newValue - New value.
// * event.url - URL of the page that made the change.
// * event.storageArea - The Storage object affected.

// * MessageEvent extends Event:
// * event.data - The message data sent.
// * event.origin - Origin of the sender.
// * event.source - Reference to sender's window.
// * event.ports - Array of MessagePort objects.

// * CloseEvent extends Event:
// * event.code - WebSocket close code.
// * event.reason - Close reason string.
// * event.wasClean - Boolean: true if closed cleanly.

// * ProgressEvent extends Event:
// * event.lengthComputable - Boolean: if total size is known.
// * event.loaded - Bytes loaded so far.
// * event.total - Total bytes to load.

// * MutationRecord (not an event, used by MutationObserver):
// * record.type - "attributes", "characterData", or "childList".
// * record.target - Affected node.
// * record.attributeName / attributeNamespace - Changed attribute.
// * record.oldValue - Previous value.
// * record.addedNodes / removedNodes - NodeList of added/removed children.
// * record.previousSibling / nextSibling - Siblings of added/removed nodes.

// * IntersectionObserverEntry:
// * entry.target - Observed element.
// * entry.isIntersecting - Boolean: target visible.
// * entry.intersectionRatio - Visible fraction (0-1).
// * entry.boundingClientRect - Target bounds.
// * entry.intersectionRect - Visible portion bounds.
// * entry.rootBounds - Root container bounds.
// * entry.time - Timestamp.

// * ResizeObserverEntry:
// * entry.target - Observed element.
// * entry.contentRect - DOMRectReadOnly of content box.
// * entry.borderBoxSize / contentBoxSize - Array of ResizeObserverSize objects.
// * entry.devicePixelContentBoxSize - Physical pixel sizes.

// * PerformanceEntry (and subclasses):
// * entry.name, entryType, startTime, duration.

// * ReportingObserver Report:
// * report.type, url, body (varies by report type: CSP, deprecation, intervention).


//! ======================================================================
//! 19. MUTATION OBSERVER (window.MutationObserver)
//! ======================================================================
//? MutationObserver watches for DOM changes and fires callbacks
//? asynchronously when mutations occur.

// * const observer = new MutationObserver(callback)
// ? Creates observer. 'callback' receives (mutationsList, observer).

// * observer.observe(targetNode, config)
// ? Starts observing 'targetNode' for specified mutations:
// ? config.childList: boolean - Watch direct child additions/removals.
// ? config.attributes: boolean - Watch attribute changes.
// ? config.characterData: boolean - Watch text content changes.
// ? config.subtree: boolean - Watch all descendants (not just direct).
// ? config.attributeOldValue: boolean - Record previous attribute values.
// ? config.characterDataOldValue: boolean - Record previous text values.
// ? config.attributeFilter: string[] - Only watch specific attributes.
// ? Use case: Reacting to DOM changes by other scripts.

// * observer.disconnect()
// ? Stops observing. Already queued callbacks will still fire.
// ? Use case: Cleanup when no longer needed.

// * observer.takeRecords()
// ? Returns array of all pending (not yet processed) MutationRecords.
// ? Empties the observer's record queue.
// ? Use case: Getting pending mutations before disconnecting.

// * MutationRecord properties:
// ? type: "childList", "attributes", or "characterData".
// ? target: The affected node.
// ? addedNodes / removedNodes: NodeList of added/removed children.
// ? previousSibling / nextSibling: Sibling nodes.
// ? attributeName: Name of changed attribute.
// ? attributeNamespace: Namespace of changed attribute.
// ? oldValue: Previous value (if configured to record).


//! ======================================================================
//! 20. INTERSECTION OBSERVER (window.IntersectionObserver)
//! ======================================================================
//? IntersectionObserver efficiently detects when elements enter/exit
//? the viewport or a specified ancestor.

// * const observer = new IntersectionObserver(callback, options)
// ? callback: Receives (entries, observer). Called when thresholds are crossed.
// ? options.root: Element to use as viewport (null = document viewport).
// ? options.rootMargin: Margin around root ("10px 20px" like CSS).
// ? options.threshold: Number or array [0-1]. Visibility ratio trigger points.
// ? Use case: Lazy loading, infinite scroll, ad visibility tracking.

// * observer.observe(targetElement)
// ? Starts observing a specific element.
// ? Use case: Tracking element visibility.

// * observer.unobserve(targetElement)
// ? Stops observing a specific element.
// ? Use case: Cleanup for removed elements.

// * observer.disconnect()
// ? Stops observing ALL elements.
// ? Use case: Complete cleanup.

// * observer.takeRecords()
// ? Returns array of pending IntersectionObserverEntry objects.
// ? Use case: Getting pending entries before disconnect.

// * IntersectionObserverEntry properties:
// ? target: The observed element.
// ? isIntersecting: Boolean - true if intersecting.
// ? intersectionRatio: Fraction of target visible (0 to 1).
// ? boundingClientRect: DOMRectReadOnly of target.
// ? intersectionRect: DOMRectReadOnly of visible portion.
// ? rootBounds: DOMRectReadOnly of root container.
// ? time: High-resolution timestamp.


//! ======================================================================
//! 21. RESIZE OBSERVER (window.ResizeObserver)
//! ======================================================================
//? ResizeObserver detects changes to element dimensions efficiently.

// * const observer = new ResizeObserver(callback)
// ? callback: Receives (entries, observer). Fires whenever sizes change.
// ? Use case: Responsive components, canvas resizing, layout adjustments.

// * observer.observe(targetElement, options)
// ? Starts observing. 'options.box': "content-box" (default), "border-box", "device-pixel-content-box".
// ? Use case: Watching element for size changes.

// * observer.unobserve(targetElement)
// ? Stops observing a specific element.

// * observer.disconnect()
// ? Stops observing all elements.

// * ResizeObserverEntry properties:
// ? target: Observed element.
// ? contentRect: DOMRectReadOnly of content box.
// ? borderBoxSize: Array of ResizeObserverSize (inlineSize, blockSize).
// ? contentBoxSize: Array of ResizeObserverSize for content.
// ? devicePixelContentBoxSize: Sizes in physical pixels.


//! ======================================================================
//! 22. PERFORMANCE OBSERVER (window.PerformanceObserver)
//! ======================================================================
//? PerformanceObserver receives performance metrics asynchronously.

// * const observer = new PerformanceObserver(callback)
// ? callback: Receives (performanceObserverEntryList, observer).

// * observer.observe(options)
// ? options.entryTypes: Array of metric types to observe:
// ? "navigation", "resource", "paint", "mark", "measure", "longtask",
// ? "element", "event", "first-input", "layout-shift", "largest-contentful-paint".
// ? Use case: Real User Monitoring (RUM), Core Web Vitals tracking.

// * observer.disconnect()
// ? Stops observing.

// * observer.takeRecords()
// ? Returns pending entries.

// * PerformanceObserverEntryList.getEntries()
// ? Returns all observed entries.

// * PerformanceObserverEntryList.getEntriesByType(type) / getEntriesByName(name)
// ? Filtered entries.


//! ======================================================================
//! 23. SELECTION & RANGE API
//! ======================================================================
//? The Selection and Range APIs provide programmatic access to
//? user-selected text and arbitrary document fragments.

// * window.getSelection() / document.getSelection()
// ? Returns a Selection object representing current user selection.

// * Selection properties:
// ? selection.anchorNode - Node where selection started.
// ? selection.anchorOffset - Offset within anchorNode.
// ? selection.focusNode - Node where selection ended.
// ? selection.focusOffset - Offset within focusNode.
// ? selection.isCollapsed - Boolean: true if start equals end (just cursor).
// ? selection.rangeCount - Number of ranges (usually 1, can be 0).
// ? selection.type - "None", "Caret" (cursor), "Range" (selection).
// ? selection.toString() - Returns selected text content.

// * Selection methods:
// ? selection.getRangeAt(index) - Returns specified Range object.
// ? selection.addRange(range) - Adds a Range to selection.
// ? selection.removeRange(range) - Removes a Range.
// ? selection.removeAllRanges() - Clears selection.
// ? selection.empty() (Deprecated) - Use removeAllRanges().
// ? selection.collapse(node, offset) - Collapses to a cursor at position.
// ? selection.extend(node, offset) - Extends selection to new position.
// ? selection.collapseToStart() / collapseToEnd() - Collapse to anchor/focus.
// ? selection.selectAllChildren(node) - Selects all children of node.
// ? selection.deleteFromDocument() - Deletes selected content from DOM.
// ? selection.containsNode(node, allowPartial) - Checks if node is in selection.
// ? selection.modify(alter, direction, granularity) - (Firefox) Modify selection by word/line/sentence.

// * Range properties:
// ? range.startContainer / endContainer - Start/end nodes.
// ? range.startOffset / endOffset - Start/end offsets.
// ? range.collapsed - Boolean: true if start equals end.
// ? range.commonAncestorContainer - Deepest node containing both start and end.

// * Range methods:
// ? range.setStart(node, offset) / setEnd(node, offset) - Set endpoints.
// ? range.setStartBefore(node) / setStartAfter(node) - Position start.
// ? range.setEndBefore(node) / setEndAfter(node) - Position end.
// ? range.selectNode(node) - Select node and all its contents.
// ? range.selectNodeContents(node) - Select only the contents of node.
// ? range.collapse(toStart) - Collapse to start (true) or end (false).
// ? range.cloneContents() - Returns DocumentFragment of range content (clone).
// ? range.extractContents() - Removes range content from DOM, returns fragment.
// ? range.deleteContents() - Deletes range content from DOM.
// ? range.insertNode(node) - Inserts node at start of range.
// ? range.surroundContents(node) - Wraps range content in new node.
// ? range.cloneRange() - Returns a copy of the range.
// ? range.detach() (Deprecated) - No longer needed. Ranges don't need cleanup.
// ? range.compareBoundaryPoints(how, sourceRange) - Compare positions of ranges.
// ? range.comparePoint(node, offset) - Returns -1/0/1 for point position.
// ? range.createContextualFragment(htmlString) - Creates fragment from HTML using range's context.
// ? range.getBoundingClientRect() - Returns DOMRect of range content.
// ? range.getClientRects() - Returns DOMRectList for each line.
// ? range.intersectsNode(node) - Returns true if range intersects node.
// ? range.isPointInRange(node, offset) - Checks if point is within range.


//! ======================================================================
//! 24. SHADOW DOM API
//! ======================================================================
//? Shadow DOM enables encapsulation of DOM subtree and CSS styles,
//? critical for Web Components.

// * element.attachShadow({ mode: 'open' | 'closed', delegatesFocus: boolean, slotAssignment: 'manual' | 'named' })
// ? Creates and attaches a ShadowRoot. Returns the ShadowRoot.
// ? 'open': shadowRoot accessible via element.shadowRoot.
// ? 'closed': shadowRoot NOT accessible externally (element.shadowRoot is null).
// ? delegatesFocus: Focus behavior delegates to first focusable element.
// ? slotAssignment: 'manual' for manual slot assignment (imperative slots).
// ? Use case: Creating Web Components.

// * element.shadowRoot
// ? Returns the ShadowRoot if mode='open', null otherwise. Read-only.
// ? Use case: Accessing component internals for inspection.

// * ShadowRoot properties (extends DocumentFragment):
// ? shadowRoot.mode - 'open' or 'closed'. Read-only.
// ? shadowRoot.host - Returns the element hosting this shadow root.
// ? shadowRoot.innerHTML - Gets/sets inner HTML of shadow tree.
// ? shadowRoot.activeElement - Focused element within shadow tree.
// ? shadowRoot.delegatesFocus - Boolean. Read-only.
// ? shadowRoot.slotAssignment - 'named' or 'manual'. Read-only.
// ? shadowRoot.pointerLockElement - Pointer-locked element in shadow tree.
// ? shadowRoot.fullscreenElement - Fullscreen element in shadow tree.
// ? shadowRoot.pictureInPictureElement - PiP element in shadow tree.
// ? shadowRoot.adoptedStyleSheets - Array of CSSStyleSheet objects.
// ? shadowRoot.elementFromPoint / elementsFromPoint - Scoped to shadow tree.
// ? shadowRoot.getSelection() - Returns Selection within shadow tree.
// ? shadowRoot.getAnimations() - Returns animations in shadow tree.

// * slot element (HTMLSlotElement):
// ? slot.assignedNodes({ flatten: boolean }) - Returns nodes assigned to slot.
// ? slot.assignedElements({ flatten: boolean }) - Returns elements only.
// ? slot.assign(...nodes) - Manual slot assignment (when slotAssignment='manual').
// ? slot.name - Slot name attribute.

// * template element (HTMLTemplateElement):
// ? template.content - Returns DocumentFragment of template contents.
// ? Use case: Cloning for repeated content.

// * customElements.define(name, constructor, options)
// ? Defines a custom HTML element.
// ? options: { extends: 'existing-element' } for customized built-ins.
// ? Use case: Creating reusable custom elements.

// * customElements.get(name)
// ? Returns the custom element constructor, or undefined.

// * customElements.whenDefined(name)
// ? Returns Promise that resolves when custom element is defined.
// ? Use case: Waiting for component registration.

// * customElements.upgrade(root)
// ? Upgrades custom elements within subtree.
// ? Use case: Initializing elements added before definition.


//! ======================================================================
//! 25. NAMED NODE MAPS & LIVE COLLECTIONS
//! ======================================================================
//? Understanding collection types is critical for DOM performance.

// * HTMLCollection
// ? LIVE collection of elements. Automatically updates when DOM changes.
// ? Returned by: getElementsByClassName, getElementsByTagName, children, etc.
// ? Has .length, .item(index), .namedItem(name/id).
// ? Can access by index: collection[0] or collection.namedItem("id").
// ? WARNING: Live collections can cause performance issues if referenced repeatedly.
// ? Use case: Iterating elements that may change.

// * NodeList
// ? Can be LIVE (childNodes) or STATIC (querySelectorAll).
// ? Static NodeLists don't update when DOM changes.
// ? Has .length, .item(index), .forEach() (modern browsers).
// ? Can access by index: nodeList[0].
// ? Use case: Iterating querySelectorAll results.

// * NamedNodeMap
// ? Collection of Attr nodes (element.attributes).
// ? Live collection. Has .length, .item(index), .getNamedItem(name).
// ? Use case: Rarely used directly. Use element.getAttribute/setAttribute.

// * DOMTokenList
// ? ClassList, relList, etc. Tokenized attribute values.
// ? Live. Has .length, .item(index), .contains(token), .add(...tokens),
// ? .remove(...tokens), .toggle(token, force), .replace(old, new),
// ? .supports(token), .value (full string), .forEach(), .entries(), .keys(), .values().
// ? Use case: Class manipulation.

// * DOMStringMap
// ? Dataset (data-* attributes). Live.
// ? Use as regular object: element.dataset.userId = "123".
// ? Use case: Custom data attributes.

// * StyleSheetList
// ? Live list of stylesheets (document.styleSheets).
// ? Use case: Accessing page stylesheets.

// * CSSRuleList
// ? List of CSS rules (stylesheet.cssRules).
// ? Use case: Iterating stylesheet rules.

// * FileList
// ? List of File objects from input[type=file]. Not live (snapshot).
// ? Use case: Reading selected files.

// * DOMRectList
// ? List of DOMRect objects from getClientRects().
// ? Use case: Hit testing text ranges.

// * HTMLFormControlsCollection
// ? RadioNodeList for form elements with same name.
// ? Use case: Accessing radio button groups.


//! ======================================================================
//! 26. DOMPARSER & XMLSERIALIZER
//! ======================================================================
//? DOMParser converts HTML/XML strings into DOM trees.
//? XMLSerializer converts DOM back to strings.

// * const parser = new DOMParser()
// ? Creates an HTML/XML parser.
// ? Use case: Parsing AJAX HTML responses.

// * parser.parseFromString(string, mimeType)
// ? Parses string into a Document.
// ? mimeType: "text/html" (returns HTMLDocument), "image/svg+xml", "application/xml", "text/xml".
// ? HTML parsing is forgiving; XML parsing throws on errors.
// ? Use case: Creating DOM from server-rendered strings.

// * const serializer = new XMLSerializer()
// ? Creates an XML/HTML serializer.
// ? Use case: Converting DOM to string for transmission.

// * serializer.serializeToString(node)
// ? Converts node and its descendants into an XML string.
// ? Works for HTML too, but output is XHTML syntax.
// ? Use case: Getting HTML string from modified DOM.

// * element.outerHTML
// ? Alternative to serializeToString for HTML elements. Easier for HTML.


//! ======================================================================
//! 27. TREE WALKER (document.createTreeWalker)
//! ======================================================================
//? TreeWalker traverses a DOM subtree with filtering capabilities.

// * const walker = document.createTreeWalker(root, whatToShow, filter, expandEntityReferences)
// ? Creates a TreeWalker object.
// ? root: The starting node.
// ? whatToShow: Bitmask of NodeFilter constants:
// ?   NodeFilter.SHOW_ALL (all nodes)
// ?   NodeFilter.SHOW_ELEMENT (elements only)
// ?   NodeFilter.SHOW_TEXT (text nodes)
// ?   NodeFilter.SHOW_COMMENT (comments)
// ?   Combine with bitwise OR: SHOW_ELEMENT | SHOW_TEXT.
// ? filter: NodeFilter object with acceptNode() method, or callback function.
// ?   Return NodeFilter.FILTER_ACCEPT, FILTER_REJECT, or FILTER_SKIP.
// ? expandEntityReferences: Deprecated, always false.

// * walker.root
// ? The root node set during creation.

// * walker.whatToShow
// ? The whatToShow bitmask.

// * walker.filter
// ? The filter object/function.

// * walker.currentNode
// ? Gets/sets the current node the walker is positioned on.
// ? Use case: Resuming traversal from specific node.

// * walker.parentNode()
// ? Moves to and returns the nearest visible ancestor node.
// ? Use case: Walking up the tree.

// * walker.firstChild()
// ? Moves to and returns first visible child.

// * walker.lastChild()
// ? Moves to and returns last visible child.

// * walker.previousSibling()
// ? Moves to and returns previous visible sibling.

// * walker.nextSibling()
// ? Moves to and returns next visible sibling.

// * walker.previousNode()
// ? Moves to and returns previous visible node in document order.
// ? Use case: Iterating backwards.

// * walker.nextNode()
// ? Moves to and returns next visible node in document order.
// ? Use case: Forward iteration loop.


//! ======================================================================
//! 28. NODE ITERATOR (document.createNodeIterator)
//! ======================================================================
//? NodeIterator is simpler than TreeWalker. Only forward/backward iteration.

// * const iterator = document.createNodeIterator(root, whatToShow, filter)
// ? Parameters identical to TreeWalker.
// ? Simpler API, less flexibility.

// * iterator.root, iterator.whatToShow, iterator.filter
// ? Same properties as TreeWalker.

// * iterator.nextNode()
// ? Returns next node in document order. Returns null when complete.

// * iterator.previousNode()
// ? Returns previous node in reverse document order.

// * iterator.referenceNode (Non-standard, used in Gecko)
// ? The current reference node.

// * iterator.pointerBeforeReferenceNode (Non-standard)
// ? Whether iterator is positioned before or after reference node.

// * iterator.detach() (Deprecated)
// ? No longer needed. Iterators are garbage collected.


//! ======================================================================
//! 29. ASSORTED DOM INTERFACES
//! ======================================================================

// * HTMLCollection, NodeList, DOMTokenList (Section 25 above)

// * NamedNodeMap (Section 25 above)

// * DOMRect / DOMRectReadOnly
// ? Represents a rectangle: x, y, width, height, top, right, bottom, left.
// ? Read-only version returned by getBoundingClientRect().
// ? Use case: Element dimensions and position.

// * DOMPoint / DOMPointReadOnly
// ? 2D/3D point: x, y, z, w (w defaults to 1, for perspective).
// ? DOMPoint.fromPoint(otherPoint) - Static method.
// ? matrixTransform(matrix) - Apply DOMMatrix transformation.
// ? Use case: Coordinate calculations.

// * DOMMatrix / DOMMatrixReadOnly
// ? 4x4 transformation matrix. Used for CSS transforms in JavaScript.
// ? Methods: translate(), scale(), rotate(), skewX(), skewY(), multiply(), inverse(), etc.
// ? Use case: Advanced animations, canvas-like transforms.

// * DOMQuad
// ? Represents quadrilateral (4 points: p1, p2, p3, p4).
// ? Created from DOMPoint or DOMRect.
// ? getBounds() - Returns DOMRect bounding the quad.
// ? Use case: 3D-transformed element bounds.

// * MutationObserver, IntersectionObserver, ResizeObserver, PerformanceObserver
// ? (Sections 19-22 above)

// * DocumentFragment
// ? Lightweight container without parent. Section 2B.
// ? Methods: querySelector, querySelectorAll, getElementById, children, etc.
// ? All standard parent node methods.
// ? Use case: Batch DOM insertions.

// * XSLTProcessor
// ? Transforms XML using XSLT stylesheets.
// ? Rarely used in modern web.

// * document.createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
// ? (Deprecated) Creates Touch objects for touch events.
// ? Use new Touch() constructor.

// * document.createTouchList(touches)
// ? (Deprecated) Creates TouchList.
// ? Use array-like TouchList constructor.

// * document.implementation
// ? Returns DOMImplementation object.
// ? implementation.createDocument(namespace, qualifiedName, doctype) - Creates XML document.
// ? implementation.createDocumentType(name, publicId, systemId) - Creates DOCTYPE.
// ? implementation.createHTMLDocument(title) - Creates new HTML document.
// ? implementation.hasFeature(feature, version) - Always returns true. Deprecated.
// ? Use case: Creating new documents programmatically.

// * document.forms, document.images, document.links, document.scripts, etc.
// ? (Section 1 above)

// * NamedNodeMap, DOMStringMap, CSSStyleDeclaration, etc.
// ? (Various sections above)


//! ======================================================================
//! 30. DEPRECATED DOM FEATURES (Avoid in new code)
//! ======================================================================
//? These features are maintained for compatibility but have modern replacements.

// * document.all
// ? Use document.querySelectorAll() instead.

// * document.domain (setter)
// ? Use postMessage() for cross-origin communication.

// * document.execCommand()
// ? Use Clipboard API (navigator.clipboard) instead.

// * element.getAttributeNode() / setAttributeNode() / removeAttributeNode()
// ? Use getAttribute() / setAttribute() / removeAttribute() instead.

// * document.createEvent()
// ? Use new Event() or new CustomEvent() constructors.

// * document.createElement('element', { is: 'custom-name' }) (for customized built-ins)
// ? Still valid but limited browser support. Use autonomous custom elements.

// * HTMLFrameElement, HTMLFrameSetElement (<frame>, <frameset>)
// ? Removed from HTML5. Use <iframe> instead.

// * HTMLAppletElement (<applet>)
// ? Removed. Java applets are dead.

// * HTMLBaseFontElement (<basefont>)
// ? Removed. Use CSS.

// * HTMLDirElement (<dir>)
// ? Removed. Use <ul>.

// * HTMLFontElement (<font>)
// ? Removed. Use CSS.

// * HTMLMarqueeElement (<marquee>)
// ? Obsolete. Use CSS animations.

// * element.align, bgColor, border, hspace, vspace, etc.
// ? Use CSS instead.

// * node.nodeValue on elements
// ? Always returns null. Use textContent or innerText.

// * window.captureEvents() / releaseEvents()
// ? Use addEventListener/removeEventListener.

// * window.showModalDialog()
// ? Removed. Use <dialog> element.

// * element.scrollIntoView(true) without options object
// ? Use { block: 'start', behavior: 'smooth' } options object.

// * document.selectedStyleSheetSet / lastStyleSheetSet / preferredStyleSheetSet / styleSheetSets
// ? Alternate stylesheets mechanism. Not widely supported.

// * CSSStyleDeclaration.getPropertyCSSValue()
// ? Returns CSSValue. Removed in modern CSSOM.

// * Range.detach()
// ? No longer needed. Ranges are GC'd automatically.

// * NodeIterator.detach()
// ? No-op in modern browsers.

// * event.srcElement (IE legacy)
// ? Use event.target.

// * event.returnValue (IE legacy)
// ? Use event.preventDefault().

// * event.cancelBubble (IE legacy)
// ? Use event.stopPropagation().

// * element.offsetLeft / offsetTop / offsetWidth / offsetHeight (Positioning)
// ? Still valid but getBoundingClientRect() is more precise and comprehensive.

// * element.currentStyle (IE legacy)
// ? Use window.getComputedStyle().