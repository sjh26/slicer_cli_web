import _ from 'underscore';

import param from './param';

/**
 * Parse a parameter group (deliminated by <label> tags) within a
 * panel.
 */
function group(label) {
    // parameter groups inside panels
    var $label = $(label),
        $description = $label.next('description'),
        parameters = _.filter(
            _.map($description.nextUntil('label'), param),
            _.isObject
        );

    // don't add the panel if there are no input parameters
    if (!parameters.length) {
        return null;
    }

    return {
        label: $label.text(),
        description: $description.text(),
        parameters
    };
}

export default group;
