import { useAuthStore } from "@/modules/auth/stores/authStore";

export const authGuard = (to, from, next) => {
    const authStore = useAuthStore();


    console.log('¿Hacia dónde va?:', to.path);
    console.log('¿Requiere invitado?:', to.meta.requiresGuest);
    console.log('¿Está autenticado?:', authStore.isAuthenticated);

    
    // Si la ruta requiere auth y el usuario NO está autenticado
    if (to.meta.requiresAuth && !authStore.isAuthenticated) { 
        next({ name: 'auth-login' }); // Usa el nombre exacto de tu ruta
    } 
    // Si la ruta es para invitados (login/reg) y el usuario YA está autenticado
    else if (to.meta.requiresGuest && authStore.isAuthenticated) {  
        console.log('Redirigiendo a home por sesión activa...');
        next({ name: 'home' });
    }else{ //Si no es ni uno ni otro que me deje continuar
        next() //hacemos en continuar sigue tu camino
    }
}