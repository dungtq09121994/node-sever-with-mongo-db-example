

function MessageUltils () {
    const buidResponseMessage = function (responseCode , responseMessage, data ) {
        var result = {
            responseCode : responseCode,
            responseMessage: responseMessage,
            data: data || ""
        };
        return result;
    };

    return {
        buidResponseMessage : buidResponseMessage
    }
};

module.exports = MessageUltils();
