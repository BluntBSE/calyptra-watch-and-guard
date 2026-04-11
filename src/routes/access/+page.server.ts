import { fail, redirect } from '@sveltejs/kit';

const ACCESS_CODE = 'ARCHIVE1971'; // Change this to your desired password

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const password = data.get('password')?.toString();

		if (password === ACCESS_CODE) {
			// Log successful access
			console.log(`✅ Archive access granted at ${new Date().toISOString()}`);
			// Redirect to archive on successful login
			throw redirect(302, '/archive');
		} else {
			// Log failed attempts (optional)
			console.log(`❌ Failed access attempt at ${new Date().toISOString()}: "${password}"`);
			
			return fail(401, { 
				error: 'Invalid access code',
				password: ''
			});
		}
	}
};
