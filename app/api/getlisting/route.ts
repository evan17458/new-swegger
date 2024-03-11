/**
 * @swagger
 * /api/listings:
 *   get:
 *     summary: 取得所有---房源
 *     parameters:
 *       - name: userId
 *         in: query
 *         schema:
 *           type: string
 *       - name: roomCount
 *         in: query
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - name: guestCount
 *         in: query
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - name: bathroomCount
 *         in: query
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - name: locationValue
 *         in: query
 *         schema:
 *           type: string
 *       - name: startDate
 *         in: query
 *         schema:
 *           type: string
 *           format: date
 *       - name: endDate
 *         in: query
 *         schema:
 *           type: string
 *           format: date
 *       - name: category
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Array of listings
 *
 */
