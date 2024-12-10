const moment = require('moment');

/**
 * Returns the nearest valid date before the given date.
 * This function assumes a valid date format as 'YYYY-MM-DD'.
 * 
 * @param {string} date - The starting date in 'YYYY-MM-DD' format.
 * @returns {string} - The nearest valid previous date.
 */
const nearestPrevValidDate = (date) => {
  const currentDate = moment(date, 'YYYY-MM-DD');

  // If the current date is invalid, throw an error
  if (!currentDate.isValid()) {
    throw new Error('Invalid date provided');
  }

  // Find the previous valid date (simply subtracting one day)
  const prevValidDate = currentDate.subtract(1, 'days');

  // Return the previous valid date in the correct format
  return prevValidDate.format('YYYY-MM-DD');
};

module.exports = nearestPrevValidDate;
