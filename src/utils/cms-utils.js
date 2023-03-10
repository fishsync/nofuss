/**
 *
 * @param {object} blocks data from cms
 * @param {string} key
 * @returns the data for the desired {key}
 */
export const getBlockData = function (blocks, key) {
	return blocks.map(function (block) {
		if (block._template === key) {
			return block[key];
		}
		return null;
	})[0];
};
