/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export class CrossTrainedRecognizer {
  public recognizers: any
  private readonly dialogPath: string

  constructor(dialogPath: string, recognizers: any) {
    this.dialogPath = dialogPath
    this.recognizers = recognizers
  }

  save(): string {
    let output = {
      $kind: 'Microsoft.CrossTrainedRecognizerSet',
      recognizers: this.recognizers
    }

    return JSON.stringify(output, null, 4)
  }

  getDialogPath(): string {
    return this.dialogPath
  }
}
