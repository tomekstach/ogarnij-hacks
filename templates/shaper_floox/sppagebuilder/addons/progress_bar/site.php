<?php

/**
 * @package SP Page Builder
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2016 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */
//no direct accees
defined('_JEXEC') or die('restricted aceess');

class SppagebuilderAddonProgress_bar extends SppagebuilderAddons {

    public function render() {

        $class = (isset($this->addon->settings->class) && $this->addon->settings->class) ? $this->addon->settings->class : '';
        $class .= (isset($this->addon->settings->shape) && $this->addon->settings->shape) ? 'sppb-progress-' . $this->addon->settings->shape : '';
        $type = (isset($this->addon->settings->type) && $this->addon->settings->type) ? $this->addon->settings->type : '';
        $progress = (isset($this->addon->settings->progress) && $this->addon->settings->progress) ? $this->addon->settings->progress : '';
        $text = (isset($this->addon->settings->text) && $this->addon->settings->text) ? $this->addon->settings->text : '';
        $stripped = (isset($this->addon->settings->stripped) && $this->addon->settings->stripped) ? $this->addon->settings->stripped : '';
        $show_percentage = (isset($this->addon->settings->show_percentage) && $this->addon->settings->show_percentage) ? $this->addon->settings->show_percentage : 0;
        $active = (isset($this->addon->settings->active) && $this->addon->settings->active) ? $this->addon->settings->active : '';
        $value = (isset($this->addon->settings->value) && $this->addon->settings->value) ? $this->addon->settings->value : '';

        //Output
        $output = ($show_percentage) ? '<div class="sppb-progress-label clearfix">' . $text . '<span>' . (int) $progress . '%</span></div>' : '';
        $output = ($value) ? '<div class="sppb-progress-label clearfix">' . (int) $value . '</div>' : '';
        $output .= '<div class="sppb-progress-wrap">';
        $output .= '<span class="sppb-progress-text">';
        if (!$show_percentage && !$value) {
            $output .= ($text) ? $text : '';
        }
        $output .= '</span>';
        $output .= '<div class="sppb-progress ' . $class . '">';
        $output .= '<div class="sppb-progress-bar ' . $type . ' ' . $stripped . '  ' . $active . '" role="progressbar" aria-valuenow="' . (int) $progress . '" aria-valuemin="0" aria-valuemax="100" data-height="' . (int) $progress . '%">';
        $output .= '</div>';
        $output .= '</div>';
        $output .= ($value) ? '<div class="sppb-progress-label clearfix">' . $text . '</div>' : '';
        $output .= '</div>'; //.sppb-progress-wrap

        return $output;
    }

    public function css() {
        $addon_id = '#sppb-addon-' . $this->addon->id;
        $bar_height = (isset($this->addon->settings->bar_height) && $this->addon->settings->bar_height) ? $this->addon->settings->bar_height : 0;
        $type = (isset($this->addon->settings->type) && $this->addon->settings->type) ? $this->addon->settings->type : '';
        $bar_background = (isset($this->addon->settings->bar_background) && $this->addon->settings->bar_background) ? $this->addon->settings->bar_background : '';
        $progress_bar_background = (isset($this->addon->settings->progress_bar_background) && $this->addon->settings->progress_bar_background) ? $this->addon->settings->progress_bar_background : '';
        $progress = (isset($this->addon->settings->progress) && $this->addon->settings->progress) ? $this->addon->settings->progress : '';

        $css = '';

        if ($progress) {
          $css .= $addon_id . ' .sppb-progress-bar {height: ' . $progress . '%;}';
        }

        if ($type == 'custom') {
            if ($bar_background) {
                $css .= $addon_id . ' .sppb-progress {background-color: ' . $bar_background . ';}';
            }

            if ($progress_bar_background) {
                $css .= $addon_id . ' .sppb-progress-bar {background-color: ' . $progress_bar_background . ';}';
            }
        }

        return $css;
    }

    public static function getTemplate() {

        $output = '
			<#
				let show_percentage = data.show_percentage || 0
				let progressClass = data.class
						progressClass += (!_.isEmpty(data.shape)) ? "sppb-progress-"+data.shape:""

				let bar_height = data.bar_height || 0

			#>

			<style type="text/css">
				<# if(bar_height) { #>
					#sppb-addon-{{ data.id }} .sppb-progress {
						height: {{bar_height}}px;
					}
					#sppb-addon-{{ data.id }} .sppb-progress-bar {
						line-height: {{ bar_height }}px;
					}
				<# } #>

				<# if(data.type == "custom") { #>
					<# if(!_.isEmpty(data.bar_background)) { #>
						#sppb-addon-{{ data.id }} .sppb-progress{
							background-color: {{ data.bar_background }}
						}
					<# } #>

					<# if(!_.isEmpty(data.progress_bar_background)) { #>
						#sppb-addon-{{ data.id }} .sppb-progress-bar{
							background-color: {{ data.progress_bar_background }}
						}
					<# } #>
				<# } #>
			</style>

			<# if( show_percentage != 0 ) {#>
			<div class="sppb-progress-label clearfix">
				{{ data.text }}
				<span> {{ data.progress }}%</span>
			</div>
			<# } #>
                        <div class="sppb-progress-wrap">
                        <span class="sppb-progress-text">
                        <# if(show_percentage == 0) { #>
                                {{ data.text }}
                        <# } #>
                        </span>
			<div class="sppb-progress {{ progressClass }}">
			<div class="sppb-progress-bar {{ data.type }} {{ data.stripped }} {{data.active}}" role="progressbar" aria-valuenow="{{ data.progress }}" aria-valuemin="0" aria-valuemax="100" data-width="{{ data.progress }}%">
			</div>
			</div>
			</div>
			';

        return $output;
    }

}
