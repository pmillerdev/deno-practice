import { getDataUrl } from './affiliate_data.ts';
import { assertMatch } from 'https://deno.land/std@0.86.0/testing/asserts.ts';

Deno.test({
    name: 'request uses HTTPS',
    fn: () => {
        const url = getDataUrl(5);
        assertMatch(url, /https/);
    },
    // only: true // means deno test will only run this
})