define(function (require) {

    return {
        GET: {
            200: require('text!./mock_data/dataEvents.json')
        }
    }
});