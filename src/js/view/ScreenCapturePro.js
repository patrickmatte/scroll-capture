import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import StartButton from "./StartButton";
import ActionView from "./ActionView";

export default class ScreenCapturePro extends UIComponent {

	constructor(element) {
		super(element);
	}

}

ScreenCapturePro.template = `
<screen-capture-pro>
	<div class="sc-window main-window">
<!--		<div class="app-name">Scroll Capture</div>-->
		<div class="sc-header">
			<div class="sc-title">
				<div class="sc-tabs">
					<span class="sc-tab" data-path="sequencer" is="router-button" data-selected="true">
						<span>Scroll Capture</span>
					</span>
				</div>
				<button class="sc-tab play-button" is="ui-button" data-model="." data-click="start">
					<span class="sc-label">Play</span>
					<span class="sc-icon"></span>
				</button>
			</div>
		</div>
		<div class="sc-panel sc-fields sequencer" data-state="show" is="ui-component">
<!--			<div class="options">-->
<!--				<button class="play-button" is="ui-button" data-model="." data-click="start"><span class="sc-label">Play</span><span class="sc-icon"></span></button>-->
<!--			</div>-->
			<actions-view data-provider="actions" is="ui-list">
				<template data-type="ActionScroll">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<span class="sc-tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">element:</span><input type="text" data-model="data.target" is="ui-input"/>
							</div>
							<div class="sc-field">
								<span class="sc-label">units:</span>
								<div class="sc-select">
									<select data-provider="data.units" data-model="data.units.selectedItem" is="ui-select"></select>
								</div>
							</div>
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
							<span class="sc-tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">element:</span><input type="text" data-model="data.elementSelector" is="ui-input"/>
							</div>
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
							<span class="sc-tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">timeout:</span><input type="text" data-model="data.timeout" is="ui-input"/><span class="unit">s</span>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionMouseEvent">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<span class="sc-tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<span class="sc-label">type:</span>
								<div class="sc-select">
									<select data-provider="data.eventTypes" data-model="data.eventTypes.selectedItem" is="ui-select"></select>
								</div>
							</div>
							<div class="sc-field">
								<span class="sc-label">element:</span><input type="text" data-model="data.cssSelector" is="ui-input"/>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">x:</span>
									<input type="text" data-model="data.x" is="ui-input"/>
									<span class="unit">px</span>
								</div>
								<div class="sc-field">
									<span class="sc-label">y:</span>
									<input type="text" data-model="data.y" is="ui-input"/>
									<span class="unit">px</span>
								</div>
							</div>
						</div>
					</action-view>
				</template>
				<template data-type="ActionEval">
					<action-view class="sc-window" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<span class="sc-tab" is="ui-text">[[data.name]]</span>
						</div>
						<div class="sc-fields">
							<div class="sc-field">
								<textarea rows="5" data-model="data.code" is="ui-input"></textarea>
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
</screen-capture-pro>
`;

// tsunami.define("start-button", StartButton);
tsunami.define("action-view", ActionView);
