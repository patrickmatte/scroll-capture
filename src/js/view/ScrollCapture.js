import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import ActionView from "./ActionView";

export default class ScrollCapture extends UIComponent {

	constructor(element) {
		super(element);
	}

}

ScrollCapture.template = `
<scroll-capture data-is-capturing="[[isCapturing]]">
	<div class="sc-window main-window">
<!--		<div class="app-name"><span>Scroll Capture</span></div>-->
		<div class="sc-header">
			<div class="sc-title">
				<div class="sc-tabs">
					<span class="sc-tab" data-selected="true">
						<span class="sc-label">ScrollCapture</span>
					</span>
<!--					<button class="sc-tab play-button" is="ui-button" data-click="playAll">-->
<!--						<span class="sc-label">Play All</span>-->
<!--					</button>-->
				</div>
				<button class="sc-tab close-button" is="ui-button" data-click="hide"></button>
			</div>
		</div>
		<div class="sc-panel sc-fields sequencer" data-state="show" is="ui-component">
			<div class="controls">
				<button class="play-button" is="ui-button" data-click="play">
					<span class="sc-label">Play</span>
				</button>
				<button class="" is="ui-button" data-click="save">
					<span class="sc-label">Save</span>
				</button>
				<button class="close-button" is="ui-button" data-click="clear">
					<span class="sc-label">Clear</span>
				</button>
			</div>
			<actions-view data-provider="actions" is="ui-list">
				<template data-type="ActionScroll">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<div class="sc-tabs">
								<span class="sc-tab">
									<span class="sc-label" is="ui-text">[[data.name]]</span>
								</span>
								<button class="sc-tab capture-button" is="ui-button" data-click="data.capture" data-is-capturing="[[data.isCapturing]]">
									<span class="sc-label">Capture</span>
								</button>
							</div>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">element:</span><input type="text" data-model="data.target" is="ui-input"/>
							</div>
<!--							<div class="sc-field">-->
<!--								<span class="sc-label">units:</span>-->
<!--								<div class="sc-select">-->
<!--									<select data-provider="data.units" data-model="data.units.selectedItem" is="ui-select"></select>-->
<!--								</div>-->
<!--							</div>-->
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">x:</span><input type="text" data-model="data.unitX" is="ui-input"/><span class="unit" is="ui-text">[[data.units.selectedItem]]</span>
								</div>
								<div class="sc-field">
									<span class="sc-label">y:</span><input type="text" data-model="data.unitY" is="ui-input"/><span class="unit" is="ui-text">[[data.units.selectedItem]]</span>
								</div>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">duration:</span><input type="text" data-model="data.duration" is="ui-input"/><span class="unit">s</span>
								</div>
								<div class="sc-field">
									<span class="sc-label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
								</div>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">easing:</span>
									<div class="sc-select">
										<select data-provider="data.easingClasses" data-model="data.easingClasses.selectedItem" is="ui-select"></select>
									</div>
								</div>
								<div class="sc-field">
									<span class="sc-label">method:</span>
									<div class="sc-select">
										<select data-provider="data.easingMethods" data-model="data.easingMethods.selectedItem" is="ui-select"></select>
									</div>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionSwipe">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<div class="sc-tabs">
								<span class="sc-tab">
									<span class="sc-label" is="ui-text">[[data.name]]</span>
								</span>
								<button class="sc-tab capture-button" is="ui-button" data-click="data.capture" data-is-capturing="[[data.isCapturing]]">
									<span class="sc-label">Capture</span>
								</button>
							</div>
						</div>
						<div class="sc-fields">
							<div class="sc-field-group">
								<div class="points" data-provider="data.points" is="ui-list">
									<template>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label" is="ui-text">x<sup>[[index1]]</sup>:</span><input type="text" data-model="data.x" is="ui-input"/><span class="unit">px</span>
											</div>
											<div class="sc-field">
												<span class="sc-label" is="ui-text">y<sup>[[index1]]</sup>:</span><input type="text" data-model="data.y" is="ui-input"/><span class="unit">px</span>
											</div>
										</div>
									</template>
								</div>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">duration:</span><input type="text" data-model="data.duration" is="ui-input"/><span class="unit">s</span>
								</div>
								<div class="sc-field">
									<span class="sc-label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
								</div>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">easing:</span>
									<div class="sc-select">
										<select data-provider="data.easingClasses" data-model="data.easingClasses.selectedItem" is="ui-select"></select>
									</div>
								</div>
								<div class="sc-field">
									<span class="sc-label">method:</span>
									<div class="sc-select">
										<select data-provider="data.easingMethods" data-model="data.easingMethods.selectedItem" is="ui-select"></select>
									</div>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionWait">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
								<span class="sc-tab">
									<span class="sc-label" is="ui-text">[[data.name]]</span>
								</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionMouseEvent">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<div class="sc-tabs">
								<span class="sc-tab">
									<span class="sc-label" is="ui-text">[[data.name]]</span>
								</span>
								<button class="sc-tab capture-button" is="ui-button" data-click="data.capture" data-is-capturing="[[data.isCapturing]]">
									<span class="sc-label">Capture</span>
								</button>
							</div>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">type:</span>
								<div class="sc-select">
									<select data-provider="data.eventTypes" data-model="data.eventTypes.selectedItem" is="ui-select"></select>
								</div>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">pageX:</span>
									<input type="text" data-model="data.x" is="ui-input"/>
									<span class="unit">px</span>
								</div>
								<div class="sc-field">
									<span class="sc-label">pageY:</span>
									<input type="text" data-model="data.y" is="ui-input"/>
									<span class="unit">px</span>
								</div>
							</div>
							<div class="sc-field">
								<span class="sc-label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionEval">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
								<span class="sc-tab">
									<span class="sc-label" is="ui-text">[[data.name]]</span>
								</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">code:</span>
								<textarea rows="5" data-model="data.code" is="ui-input"></textarea>
							</div>
							<div class="sc-field">
								<span class="sc-label">delay:</span><input type="text" data-model="data.delay" is="ui-input"/><span class="unit">s</span>
							</div>
						</div>
					</action-view>
				</template>
			</actions-view>
			<footer>
				<div class="sc-window">
<!--					<div class="sc-title">-->
<!--						<span class="sc-tab">Add an action</span>-->
<!--					</div>-->
					<div class="sc-fields">
						<div class="sc-field">
							<div class="sc-select">
								<select is="ui-select" data-valuePath="type" data-provider="actions.types" data-model="actions.types.selectedItem">
									<template data-type="*">
										<option is="ui-text" value="[[data.type]]" data-model="data.name"></option>
									</template>
								</select>
							</div>
							<button class="add-button" is="ui-button" data-click="actions.addSelectedType">+</button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
</scroll-capture>
`;

// tsunami.define("start-button", StartButton);
tsunami.define("action-view", ActionView);
