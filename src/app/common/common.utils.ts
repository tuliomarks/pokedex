export class CommonUtils {
    /**
     * Filter array by string
     *
     */
    public static filterArrayByString(mainArr, searchText): any {
        if ( searchText === '' ) {
            return mainArr;
        }

        searchText = searchText.toLowerCase();

        return mainArr.filter(itemObj => {
            return this.searchInObj(itemObj, searchText);
        });
    }

    /**
     * Search in object
     *
     */
    public static searchInObj(itemObj, searchText): boolean {
        for ( const prop in itemObj ) {

            if ( !itemObj.hasOwnProperty(prop) ) {
                continue;
            }

            const value = itemObj[prop];

            if ( typeof value === 'string' ) {
                if ( this.searchInString(value, searchText) ) {
                    return true;
                }
            } else if ( Array.isArray(value) ) {
                if ( this.searchInArray(value, searchText) ) {
                    return true;
                }
            }

            if ( typeof value === 'object' ) {
                if ( this.searchInObj(value, searchText) ) {
                    return true;
                }
            }
        }
    }

    /**
     * Search in array
     *
     */
    public static searchInArray(arr, searchText): boolean {
        for ( const value of arr ) {
            if ( typeof value === 'string' ) {
                if ( this.searchInString(value, searchText) ) {
                    return true;
                }
            }

            if ( typeof value === 'object' ) {
                if ( this.searchInObj(value, searchText) ) {
                    return true;
                }
            }
        }
    }

    /**
     * Search in string
     *
     */
    public static searchInString(value, searchText): any {
        return value.toLowerCase().includes(searchText);
    }

}
