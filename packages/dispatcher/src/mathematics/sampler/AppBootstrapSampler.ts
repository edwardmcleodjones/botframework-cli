/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IDictionaryStringIdGenericArray } from "../../data_structure/IDictionaryStringIdGenericArray";
import { IDictionaryStringIdGenericValue } from "../../data_structure/IDictionaryStringIdGenericValue";

import { BootstrapSampler } from "./BootstrapSampler";

import { Utility } from "../../utility/Utility";

export function exampleFunctionBootstrapSampler(): void {
    const sampler: BootstrapSampler<string> = new BootstrapSampler<string>();
    sampler.addInstance("label0", "label0 - utterance 0");
    sampler.addInstance("label0", "label0 - utterance 1");
    sampler.addInstance("label0", "label0 - utterance 2");
    sampler.addInstance("label0", "label0 - utterance 3");
    sampler.addInstance("label1", "label1 - utterance 0");
    sampler.addInstance("label1", "label1 - utterance 1");
    sampler.addInstance("label2", "label2 - utterance 0");
    sampler.addInstance("label2", "label2 - utterance 1");
    sampler.addInstance("label2", "label2 - utterance 2");
    sampler.addInstance("label2", "label2 - utterance 3");
    sampler.addInstance("label2", "label2 - utterance 4");
    sampler.addInstance("label2", "label2 - utterance 5");
    sampler.resetLabelsAndMap();
    Utility.debuggingLog(
        sampler.getInstances());
    Utility.debuggingLog(
        Object.keys(sampler.getInstances()));
    Utility.debuggingLog(
        "sampler.getNumberInstances() = " + sampler.getNumberInstances());
    Utility.debuggingLog(
        "sampler.getNumberLabels() = " + sampler.getNumberLabels());
    Utility.debuggingLog(
        sampler.getLabels());
    Utility.debuggingLog(
        sampler.getLabelMap());
    Utility.debuggingLog(
        sampler.getInstances());
    const sampledInstances = sampler.sampleInstances();
    for (const instance of sampledInstances) {
        Utility.debuggingLog(
            instance);
    }
}

export function exampleFunctionBootstrapSamplerWithArrayInput(): void {
    const instances: IDictionaryStringIdGenericArray<number> = {};
    instances.a = [0, 1, 2, 3];
    instances.b = [4, 5, 6];
    instances.c = [7, 8, 9];
    const sampler: BootstrapSampler<number> = new BootstrapSampler<number>(instances);
    const typeInstances = typeof instances;
    Utility.debuggingLog(
        `typeInstances=${typeInstances}`);
    Utility.debuggingLog(
        sampler.getInstances());
    Utility.debuggingLog(
        Object.keys(sampler.getInstances()));
    Utility.debuggingLog(
        "sampler.getNumberInstances() = " + sampler.getNumberInstances());
    Utility.debuggingLog(
        "sampler.getNumberLabels() = " + sampler.getNumberLabels());
    Utility.debuggingLog(
        sampler.getLabels());
    Utility.debuggingLog(
        sampler.getLabelMap());
    Utility.debuggingLog(
        sampler.getInstances());
    const sampledInstances = sampler.sampleInstances();
    for (const instance of sampledInstances) {
        Utility.debuggingLog(
            instance);
    }
}

if (require.main === module) {
    exampleFunctionBootstrapSampler();
    exampleFunctionBootstrapSamplerWithArrayInput();
}
