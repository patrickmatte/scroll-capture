import UIComponent from "../tsunami/components/UIComponent";
import * as tsunami from "../tsunami/tsunami";
import ActionView from "./ActionView";
import Style from "../tsunami/components/Style";
import {events} from "../tsunami/events";
import Point from "../tsunami/geom/Point";
import {app} from "../main";
import ActionsView from "./ActionsView";

export default class ScrollCapture extends UIComponent {

	constructor(element) {
		super(element);
		this.style = new Style(this.element.style);
		this.style.right = 50;
		this.style.top = 50;

		this.dragStart = this.dragStart.bind(this);
		this.dragMove = this.dragMove.bind(this);
		this.dragEnd = this.dragEnd.bind(this);

		let dragArea = this.element.querySelector(".sc-header .sc-drag-area");
		dragArea.addEventListener(events.mousedown, this.dragStart);
	}

	dragStart(event) {
		event.preventDefault();
		this.startPosition = new Point(this.style.right, this.style.top);
		this.startPoint = this.getTouchPoint(event);
		document.body.addEventListener(events.mousemove, this.dragMove);
		document.body.addEventListener(events.mouseup, this.dragEnd);
	}

	dragMove(event) {
		let point = this.getTouchPoint(event);
		let diff = this.startPoint.subtract(point);
		this.style.right = this.startPosition.x + diff.x;
		this.style.top = this.startPosition.y - diff.y;
	}

	dragEnd(event) {
		document.body.removeEventListener(events.mousemove, this.dragMove);
		document.body.removeEventListener(events.mouseup, this.dragEnd);
		app.save();
	}

	deserialize(obj) {
		this.style.right = obj.right;
		this.style.top = obj.top;
	}

	serialize() {
		let obj = {
			right:this.style.right,
			top:this.style.top
		};
		return obj;
	}

}

ScrollCapture.template = `
<scroll-capture data-is-capturing="[[isCapturing]]">
	<div class="sc-window main-window" is="ui-component">
<!--		<div class="app-name"><span>Scroll Capture</span></div>-->
		<div class="sc-header">
			<div class="sc-title">
				<div class="sc-drag-area"></div>
				<div class="sc-tabs">
					<span class="sc-tab" data-selected="true">
						<span class="sc-label">Scroll Capture</span>
					</span>
<!--					<button class="sc-tab play-button" is="ui-button" data-click="playAll">-->
<!--						<span class="sc-label">Play All</span>-->
<!--					</button>-->
				</div>
				<button class="sc-tab close-button" is="ui-button" data-click="hide"></button>
			</div>
		</div>
		<div class="sc-panel sc-fields sequencer" data-state="show" is="ui-component">
			<div class="controls" is="ui-component" data-actions-length="[[actions.length]]">
				<button class="save-button" is="ui-button" data-click="save" data-is-saving="[[isSaving]]">
					<span class="sc-label">Save</span>
				</button>
				<button class="play-button" is="ui-button" data-click="play">
					<span class="sc-label">Play</span>
				</button>
				<button class="close-button" is="ui-button" data-click="clear">
					<span class="sc-label">Clear</span>
				</button>
			</div>
			<actions-view data-provider="actions" data-actions-length="[[actions.length]]">
				<template>
					<action-view class="sc-window ui-list-element" data-type="[[data.type]]" data-model="data">
						<div class="sc-title">
							<div class="sc-drag-area ui-list-drag-area"></div>
							<div class="sc-tabs">
								<span class="sc-tab sc-title-tab">
									<input class="sc-label" size="[[data.name.length]]" is="ui-input" data-model="data.name"/>
								</span>
							</div>
							<button class="close-button" data-model="data" is="ui-button"></button>
						</div>
						<div class="sc-fields">
							<div class="sc-fields-list" is="ui-list" data-provider="data.array">
								<template data-type="ActionScroll">
									<div>
<!--										<div class="sc-field">-->
<!--											<span class="sc-label">units</span>-->
<!--											<div class="sc-select">-->
<!--												<select data-provider="data.units" data-model="data.units.selectedItem" is="ui-select"></select>-->
<!--											</div>-->
<!--										</div>-->
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">Left:</span><input type="text" data-model="data.unitX" is="ui-input"/>
											</div>
											<div class="sc-field">
												<span class="sc-label">Top:</span><input type="text" data-model="data.unitY" is="ui-input"/>
											</div>
										</div>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">Duration:</span><input type="text" data-model="data.duration" is="ui-input"/>
											</div>
											<div class="sc-field">
												<span class="sc-label">Element:</span><input type="text" data-model="data.target" is="ui-input"/>
											</div>
										</div>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">Easing:</span>
												<div class="sc-select">
													<select data-provider="data.easingClasses" data-model="data.easingClasses.selectedItem" is="ui-select"></select>
												</div>
											</div>
											<div class="sc-field">
												<span class="sc-label">Method:</span>
												<div class="sc-select">
													<select data-provider="data.easingMethods" data-model="data.easingMethods.selectedItem" is="ui-select"></select>
												</div>
											</div>
										</div>
									</div>
								</template>
								<template data-type="ActionSwipe">
									<div>
										<div class="sc-field-group">
											<div class="points" data-provider="data.points" is="ui-list">
												<template>
													<div class="sc-field-group">
														<div class="sc-field">
															<span class="sc-label" is="ui-text">PageX<sup>[[index1]]</sup>:</span>
															<input type="text" data-model="data.x" is="ui-input"/>
														</div>
														<div class="sc-field">
															<span class="sc-label" is="ui-text">PageY<sup>[[index1]]</sup>:</span>
															<input type="text" data-model="data.y" is="ui-input"/>
														</div>
													</div>
												</template>
											</div>
										</div>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">Duration:</span><input type="text" data-model="data.duration" is="ui-input"/>
											</div>
											<div class="sc-field"></div>
										</div>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">Easing:</span>
												<div class="sc-select">
													<select data-provider="data.easingClasses" data-model="data.easingClasses.selectedItem" is="ui-select"></select>
												</div>
											</div>
											<div class="sc-field">
												<span class="sc-label">Method:</span>
												<div class="sc-select">
													<select data-provider="data.easingMethods" data-model="data.easingMethods.selectedItem" is="ui-select"></select>
												</div>
											</div>
										</div>
									</div>
								</template>
								<template data-type="ActionMouseEvent">
									<div>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">Type:</span>
												<div class="sc-select">
													<select data-provider="data.eventTypes" data-model="data.eventTypes.selectedItem" is="ui-select"></select>
												</div>
											</div>
											<div class="sc-field"></div>
										</div>
										<div class="sc-field-group">
											<div class="sc-field">
												<span class="sc-label">PageX:</span>
												<input type="text" data-model="data.x" is="ui-input"/>
											</div>
											<div class="sc-field">
												<span class="sc-label">PageY:</span>
												<input type="text" data-model="data.y" is="ui-input"/>
											</div>
										</div>
									</div>
								</template>
								<template data-type="ActionWait">
									<div></div>
								</template>
								<template data-type="ActionEval">
									<div>
										<div class="sc-field">
											<span class="sc-label">Code:</span>
											<textarea rows="5" data-model="data.code" is="ui-input"></textarea>
										</div>
									</div>
								</template>
							</div>
							<div class="sc-field-group">
								<div class="sc-field">
									<span class="sc-label">Delay:</span><input type="text" data-model="data.delay" is="ui-input"/>
								</div>
								<div class="sc-field sc-action-buttons">
									<button class="play-button" is="ui-button" data-click="data.play" data-is-playing="[[data.isPlaying]]">
										<span>Play</span>
									</button>
									<button class="capture-button" is="ui-button" data-click="data.capture" data-is-captureable="[[data.isCaptureable]]" data-is-capturing="[[data.isCapturing]]">
										<span>Capture</span>
									</button>
								</div>
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
							<button class="add-button" is="ui-button" data-click="actions.addSelectedType"></button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
</scroll-capture>
`;

// tsunami.define("start-button", StartButton);
tsunami.define("actions-view", ActionsView);
