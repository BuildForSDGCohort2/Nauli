/**
 * Service used to process data being passed to and from localStorage 
 */

export abstract class CacheService {
    protected getItem<T>(key: string): T {
        const data = localStorage.getItem(key);
        if (data && data !== 'undefined') {
            return JSON.parse(data);
        }
        return null;
    }

    protected setItem(key: string, data: object | string): void {
        if (typeof data === 'string') {
            localStorage.setItem(key, data);
        }
        localStorage.setItem(key, JSON.stringify(data));
    }

    protected removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    protected clear(): void {
        localStorage.clear();
    }
}
