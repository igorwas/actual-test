import { regex } from './regex'

export const schemaOptions =  {
  clean: {
    autoConvert: true,
    extendAutoValueContext: {},
    filter: false,
    getAutoValues: true,
    removeEmptyStrings: true,
    removeNullsFromArrays: false,
    trimStrings: true,
  },
  humanizeAutoLabels: false,
  requiredByDefault: false,
}

export const metaSchema = {
  _id: {
    type: String,
    regEx: regex._id,
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (!this.isModifier) {
        return new Date();
      }
    },
  },
};