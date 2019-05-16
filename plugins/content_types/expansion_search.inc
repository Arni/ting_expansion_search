  <?php
/**
 * @file
 * This plugin generates a search result based on a new materials node. It's
 * mainly used to override the default page for this node type (node/%node).
 */

$plugin = array(
  'title' => t('Ting expansion search'),
  'description' => t('Show links to expanded searches'),
  'single' => TRUE,
  //'edit form' => 'ting_inspiration_list_content_type_edit_form',
  'render callback' => 'ting_expansion_search_content_type_render',
  'category' => t('Ting'),
  //'required context' => array(new ctools_context_required(t('Inspiration List'), 'node')),
  'render last' => TRUE,
);

/**
 * Render the ting new materials results results amount block.
 */
function ting_expansion_search_content_type_render($subtype, $conf, $panel_args, $context) {
  // Define the return block.
  $block = new stdClass();
  $content = ting_expansion_search_links();

  // Set block content.
  $block->content = $content;
  return $block;
}

/**
 * Enable admin settings page.
 */
function ting_inspiration_list_content_type_edit_form($form, &$form_state) {
  return $form;
}
