import {addFuncs} from 'core/acts-funcs.js';
import {bindEvents} from 'setjs/template/events.js';
import {dataAttrFind} from 'setjs/utility/comp-helpers.js';

addFuncs({
  bindEvents: function(_, {$el, comp, data}) {
    dataAttrFind($el, 'act', 1).each(function(i, item) {
      bindEvents($(item), comp, data, (comp.rComp || comp).actions);
    });
  },
  repeat: function(data, {count}) {
    let list = [];
    for (let i = 0; i < count; i++) {
      list.push(i);
    }
    return list;
  },
  nullOption: function(txt, {$el}) {
    if (!$el.find('[value=""]').length) {
      $el.prepend(`<option class="prompt" value disabled>${txt}</option>`);
      $el.val('');
    }
  },
  field: function(data, opts, prop) {
    return data[prop];
  },
  truncate: function(list, config) {
    if (list) {
      let count = config.count || 5;
      if (list.length > count) {
        let rem = list.length - count;
        list = list.slice(0, count);
        if (config.id == 'members') {
          list.push({colouring: '#ddd', initials: '+' + rem});
        } else {
          list.push('+' + rem);
        }
      }
      return list;
    }
  },
});
