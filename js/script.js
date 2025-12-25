/**
 * DLB - Brick Manufacturer Website Scripts
 * Description: Tailwind configuration and other custom scripts.
 */

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'tamil': ['"Baloo Thambi 2"', 'sans-serif'],
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'brick-red': '#C1440E',
                'brick-brown': '#8B4513',
                'warm-cream': '#F5E6D3',
            }
        }
    }
}
