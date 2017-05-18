import _ from 'underscore';

import group from './group';

/**
 * Parse a <parameters> tag into a "panel" object.
 */
function panel(panelTag) {
    var $panel = $(panelTag);
    var groups = _.filter(
        _.map($panel.find('parameters > label'), group),
        _.isObject
    );

    if (!groups.length) {
        return null;
    }

    return {
        advanced: $panel.attr('advanced') === 'true',
        groups: _.filter(
            _.map($panel.find('parameters > label'), group),
            _.isObject
        )
    };
}

export default panel;
