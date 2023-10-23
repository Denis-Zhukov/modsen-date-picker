export class LocalStorageUtils {
    static addItem<T>(key: string, ...values: T[]) {
        const oldValues = localStorage.getItem(key);
        let newValues: T[] = [];
        if (oldValues) newValues = [...JSON.parse(oldValues)];
        localStorage.setItem(key, JSON.stringify(newValues.concat(values)));
    }
}
