import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  status?: string;
  type: string;
  competition?: string;
  image?: string;
  pdfUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const handleDownloadPdf = () => {
    if (project.pdfUrl) {
      window.open(project.pdfUrl, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="glass-card h-full overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed" 
                        ? "bg-secondary/20 text-secondary" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {project.status}
                    </span>
                  )}
                  {project.competition && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      {project.competition}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-4xl mx-auto">
                  {/* Project Image */}
                  {project.image && (
                    <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {!project.image && (
                    <div className="w-full h-48 md:h-64 rounded-xl mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-4xl md:text-6xl font-bold gradient-text">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h2>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* PDF Download Section */}
                  {project.pdfUrl ? (
                    <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border/50">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Project Documentation</h4>
                          <p className="text-sm text-muted-foreground">Download the complete project PDF</p>
                        </div>
                        <button
                          onClick={handleDownloadPdf}
                          className="btn-primary"
                        >
                          <Download className="w-5 h-5" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8 p-6 rounded-xl bg-muted/30 border border-border/30">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <ExternalLink className="w-5 h-5" />
                        <p className="text-sm">PDF documentation coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
