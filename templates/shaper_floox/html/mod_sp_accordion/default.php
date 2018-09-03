<?php
/*------------------------------------------------------------------------
# JoomShaper Accordion Module by JoomShaper.com
# ------------------------------------------------------------------------
# author    JoomShaper http://www.joomshaper.com
# Copyright (C) 2010 - 2014 JoomShaper.com. All Rights Reserved.
# @license - http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# Websites: http://www.joomshaper.com
-------------------------------------------------------------------------*/
// no direct access
defined('_JEXEC') or die('Restricted access');
?>
<div id="accordion_sp1_id<?php echo $uniqid; ?>" class="sppb-addon sppb-addon-accordion <?php echo $moduleclass_sfx ?>">
	<div class="sppb-addon-content">
		<div class="sppb-panel-group">
	<?php foreach ( $list as $key => $item ) { ?>
		<div class="sppb-panel sppb-panel-default">
			<div class="sppb-panel-heading <?php if($key == 0 && $hidefirst != 1) echo 'active';?>">
				<span class="sppb-toggle-direction"><i class="floox-icon floox-plus"></i></span>
				<span class="sppb-panel-title"><?php echo str_replace('\n', '<br/>', $item->title); ?></span>
			</div>
			<div class="sppb-panel-collapse" <?php if($key != 0 || $hidefirst == 1) echo ' style="display: none;"';?>>
				<div class="sppb-panel-body">
					<?php echo $item->introtext; ?>
				</div>
			</div>
		</div>
	<?php } ?>
</div>
