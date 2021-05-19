var fetch_fundamental_data = false;
var show_earnings_surprise = false;
var open_new_tab = true;
var ms_style_output = true;
var limit_num_qtr = true;
var default_ds = 1;

$(document).ready(init);

function init() {
  restore_options();
  $('.checkbox').change(save_options);
  $('#ds-switch').change(save_options);
}

// Restores checkbox state using the options stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get(['fetch_fundamental_data', 'show_earnings_surprise', 'open_new_tab', 'ms_style_output', 'limit_num_qtr', 'default_ds'], function(options) {
    if (isDefined(options.fetch_fundamental_data)) {fetch_fundamental_data = options.fetch_fundamental_data;}
    if (isDefined(options.show_earnings_surprise)) {show_earnings_surprise = options.show_earnings_surprise;}
    if (isDefined(options.open_new_tab)) {open_new_tab = options.open_new_tab;}
    if (isDefined(options.ms_style_output)) {ms_style_output = options.ms_style_output;}
    if (isDefined(options.limit_num_qtr)) {limit_num_qtr = options.limit_num_qtr;}
    if (isDefined(options.default_ds)) {default_ds = options.default_ds;}

    $('#fetch_fundamental_data').prop('checked', fetch_fundamental_data);
    $('#show_earnings_surprise').prop('checked', show_earnings_surprise);
    $('#open_new_tab').prop('checked', open_new_tab);
    $('#ms_style_output').prop('checked', ms_style_output);
    $('#limit_num_qtr').prop('checked', limit_num_qtr);
    if (default_ds == 2) {
      $('#ds_two').prop('checked', true);
    }
    else {
      $('#ds_one').prop('checked', true);
    }
  });
}

// Saves options to chrome.storage
function save_options() {
  let fetch_fundamental_data = $('#fetch_fundamental_data').is(":checked");
  let show_earnings_surprise = $('#show_earnings_surprise').is(":checked");
  let open_new_tab = $('#open_new_tab').is(":checked");
  let ms_style_output = $('#ms_style_output').is(":checked");
  let limit_num_qtr = $('#limit_num_qtr').is(":checked");
  let default_ds = 1;
  if ($('#ds_one').is(":checked")) {
    default_ds = 1;
  }
  else if ($('#ds_two').is(":checked")) {
    default_ds = 2;
  }
  chrome.storage.local.set({
    fetch_fundamental_data: fetch_fundamental_data,
    show_earnings_surprise: show_earnings_surprise,
    open_new_tab: open_new_tab,
    ms_style_output: ms_style_output,
    limit_num_qtr: limit_num_qtr,
    default_ds: default_ds
  });
}

function isDefined(smth) {
    return typeof smth !== 'undefined';
}
