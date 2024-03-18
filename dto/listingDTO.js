/**
 * Formats the API response for product listing.
 * @param {Array} data - The data to be included in the response.
 * @param {Number} totalCount - The total count of products.
 * @returns {Object} The formatted response object.
 */
const formatProductListResponse = (data, totalCount) => {
	return {
		data,
		totalCount,
	};
};

module.exports = { formatProductListResponse };



