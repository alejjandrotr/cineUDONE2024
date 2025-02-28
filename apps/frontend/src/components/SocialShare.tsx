// SocialShare.tsx
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiShare2,
  FiX,
  FiClock,
  FiAlertCircle,
  FiCheckCircle,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMessageCircle,
  FiLink,
  FiImage,
  FiLoader
} from 'react-icons/fi';

interface SocialShareProps {
  onClose?: () => void;
  movies?: string[];
  platforms?: string[];
  onPublish?: (data: {
    movie: string;
    platform: string;
    message: string;
    image?: string;
    scheduledDate?: Date;
  }) => void;
}



const SocialShare: React.FC<SocialShareProps> = ({
  onClose,
  movies = defaultMovies,
  platforms = defaultPlatforms,
  onPublish,
}) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [externalLink, setExternalLink] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const templates = [
    { id: '1', text: '¡Acabo de ver {movie}! 🎬' },
    { id: '2', text: 'Recomiendo {movie}, ¡es increíble! 🌟' },
    { id: '3', text: 'No te pierdas {movie} en cines 🍿' },
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsMounted(false);
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const applyTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setCustomMessage(template.text.replace('{movie}', selectedMovie));
    }
  };

  const handlePublish = () => {
    if (!selectedMovie || !selectedPlatform) {
      setError('Por favor selecciona una película y una plataforma');
      return;
    }

    setError('');
    setMessage('Publicando...');

    const publicationData = {
      movie: selectedMovie,
      platform: selectedPlatform,
      message: customMessage,
      image: selectedImage || undefined,
      scheduledDate: scheduledDate || undefined
    };

    onPublish?.(publicationData);

    timeoutRef.current = setTimeout(() => {
      setMessage(`¡Programado exitosamente para ${scheduledDate?.toLocaleDateString()}!`);
      timeoutRef.current = setTimeout(() => onClose?.(), 5000);
    }, 2000);
  };

  const platformIcons = {
    'Instagram': FiInstagram,
    'Facebook': FiFacebook,
    'Twitter': FiTwitter,
    'WhatsApp': FiMessageCircle
  };

  const dropIn = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: '0', opacity: 1 },
    exit: { y: '100vh', opacity: 0 },
  };

  if (!isMounted) return null;

  const portalRoot = document.getElementById('portal-root');

if (!portalRoot) {
  console.error('El elemento portal-root no se encontró en el DOM.');
  return null;
}

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-xl"
        >
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                <FiShare2 className="inline-block mr-2" />
                Compartir Película
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Cerrar"
              >
                <FiX className="text-gray-600 dark:text-gray-300 text-xl" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Seleccionar Película
                  </label>
                  <select
                    value={selectedMovie}
                    onChange={(e) => setSelectedMovie(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Elige una película...</option>
                    {movies.map((movie) => (
                      <option key={movie} value={movie}>{movie}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Plantillas
                  </label>
                  <select
                    onChange={(e) => applyTemplate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Seleccionar plantilla...</option>
                    {templates.map((template) => (
                      <option key={template.id} value={template.id}>
                        {template.text}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje Personalizado
                  </label>
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows={3}
                    maxLength={selectedPlatform === 'Twitter' ? 280 : Infinity}
                  />
                  {selectedPlatform === 'Twitter' && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {280 - customMessage.length} caracteres restantes
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiImage className="inline-block mr-2" />
                    Subir Imagen
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Plataforma
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map((platform) => {
                      const Icon = platformIcons[platform as keyof typeof platformIcons];
                      return (
                        <button
                          key={platform}
                          onClick={() => setSelectedPlatform(platform)}
                          className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                            selectedPlatform === platform
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                          }`}
                        >
                          <Icon className="mr-2" />
                          <span className="capitalize">{platform}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiClock className="inline-block mr-2" />
                    Programar Publicación
                  </label>
                  <input
                    type="datetime-local"
                    min={new Date().toISOString().slice(0, 16)}
                    onChange={(e) => setScheduledDate(new Date(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <FiLink className="inline-block mr-2" />
                    Enlace Adicional
                  </label>
                  <input
                    type="url"
                    value={externalLink}
                    onChange={(e) => setExternalLink(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {selectedImage && (
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center space-x-2">
                <FiAlertCircle className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {message && (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="flex-shrink-0" />
                  <span>{message}</span>
                </div>
                <div className="pt-2">
                  <div className="text-sm font-medium">Estadísticas estimadas:</div>
                  <div className="flex justify-between text-xs">
                    <span>Alcance: 1.2K</span>
                    <span>Interacciones: 245</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600 mt-2">
                    <div className="bg-green-500 h-1.5 rounded-full w-1/3"></div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setMessage('');
                  }}
                  className="text-sm text-green-700 dark:text-green-300 hover:underline"
                >
                  Deshacer (5s)
                </button>
              </div>
            )}

            <button
              onClick={handlePublish}
              disabled={!!message}
              className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {message ? (
                <>
                  <FiLoader className="animate-spin" />
                  <span>Publicando...</span>
                </>
              ) : (
                'Programar Publicación'
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    portalRoot
  );
};

const defaultMovies = [
  'Annabelle',
  'El Hobbit',
  'Harry Potter',
  'John Wick',
  'La Monja',
  'Lord of the Rings',
  'Piratas del Caribe',
  'Shrek 2',
  'Van Helsing',
  'Volver al Futuro 3',
];

const defaultPlatforms = ['Instagram', 'Facebook', 'WhatsApp', 'Twitter'];

export default SocialShare;