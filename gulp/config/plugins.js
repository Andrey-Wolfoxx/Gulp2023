import replace from "gulp-replace"; // Find and replace
import plumber from "gulp-plumber"; // Error processing
import notify from "gulp-notify"; // Hints
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Update check
import ifPlugin from "gulp-if"; // Условное ветвление

// Export object
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin
};