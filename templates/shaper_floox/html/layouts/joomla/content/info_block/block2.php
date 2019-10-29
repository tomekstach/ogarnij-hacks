<?php

/**
 * @package     Joomla.Site
 * @subpackage  Layout
 *
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('JPATH_BASE') or die;

$blockPosition = $displayData['params']->get('info_block_position', 0);

?>
<dl class="article-info">

  <?php if (
    $displayData['position'] == 'above' && ($blockPosition == 0 || $blockPosition == 2)
    || $displayData['position'] == 'below' && ($blockPosition == 1)
  ) : ?>

  <dt class="article-info-term"></dt>

  <?php if ($displayData['params']->get('show_author') && !empty($displayData['item']->author)) : ?>
  <?php echo JLayoutHelper::render('joomla.content.info_block.author', $displayData); ?>
  <?php endif; ?>

  <?php if ($displayData['params']->get('show_parent_category') && !empty($displayData['item']->parent_slug)) : ?>
  <?php echo JLayoutHelper::render('joomla.content.info_block.parent_category', $displayData); ?>
  <?php endif; ?>


  <?php if ($displayData['params']->get('show_publish_date')) : ?>
  <?php echo JLayoutHelper::render('joomla.content.info_block.publish_date', $displayData); ?>
  <?php endif; ?>

  <?php echo JLayoutHelper::render('joomla.content.comments.comments_count', $displayData); //Helix Comment Count 
      ?>

  <?php endif; ?>

  <?php if (
    $displayData['position'] == 'above' && ($blockPosition == 0)
    || $displayData['position'] == 'below' && ($blockPosition == 1 || $blockPosition == 2)
  ) : ?>
  <?php if ($displayData['params']->get('show_create_date')) : ?>
  <?php echo JLayoutHelper::render('joomla.content.info_block.create_date', $displayData); ?>
  <?php endif; ?>

  <?php if ($displayData['params']->get('show_modify_date')) : ?>
  <?php echo JLayoutHelper::render('joomla.content.info_block.modify_date', $displayData); ?>
  <?php endif; ?>

  <?php if ($displayData['params']->get('show_hits')) : ?>
  <?php echo JLayoutHelper::render('joomla.content.info_block.hits', $displayData); ?>
  <?php endif; ?>
  <?php endif; ?>

  <dd>
    <?php echo JText::_('COM_CONTENT_CONTENT_BREADCRUMPS_SLUG'); ?>:
    <?php $title = $this->escape($displayData['item']->category_title); ?>
    <?php if ($displayData['params']->get('link_category') && $displayData['item']->catslug) : ?>
    <?php echo '<a href="' . JRoute::_(ContentHelperRoute::getCategoryRoute($displayData['item']->catslug)) . '" itemprop="genre" data-toggle="tooltip" title="' . JText::_('COM_CONTENT_CONTENT_TYPE_CATEGORY') . '">' . $title . '</a>'; ?>
    <?php else : ?>
    <?php echo '<span itemprop="genre" itemprop="genre" data-toggle="tooltip" title="' . JText::_('COM_CONTENT_CONTENT_TYPE_CATEGORY') . '">' . $title . '</span>'; ?>
    <?php endif; ?>
  </dd>

</dl>