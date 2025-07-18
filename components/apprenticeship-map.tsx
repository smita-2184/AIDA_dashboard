"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink, Info, RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"

export function ApprenticeshipMap() {
  const [iframeError, setIframeError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeError = () => {
    setIframeError(true)
    setIsLoading(false)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const retryLoad = () => {
    setIframeError(false)
    setIsLoading(true)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Apprenticeship Schemes Map
          </CardTitle>
          <CardDescription>
            Interactive map showing apprenticeship schemes across Europe from the European Centre for the Development of Vocational Training (CEDEFOP).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Info Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-900">About this Map</h4>
                  <p className="text-sm text-blue-800">
                    This interactive map provides comprehensive information about apprenticeship schemes across European countries. 
                    It includes detailed scheme fiches, implementation details, and comparative analysis of different approaches 
                    to vocational education and training across the EU.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">Interactive Map</Badge>
                    <Badge variant="outline" className="text-xs">CEDEFOP Database</Badge>
                    <Badge variant="outline" className="text-xs">EU-wide Coverage</Badge>
                    <Badge variant="outline" className="text-xs">Scheme Fiches</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-lg border bg-white overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">CEDEFOP Apprenticeship Schemes Map</span>
                  <a 
                    href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/scheme-fiches-map" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Open in new tab
                  </a>
                </div>
              </div>
              <div className="relative w-full" style={{ height: "600px" }}>
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
                      <p className="text-gray-600">Loading CEDEFOP map...</p>
                    </div>
                  </div>
                )}
                
                {iframeError ? (
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                    <div className="text-center space-y-4 max-w-md mx-auto p-6">
                      <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Map Loading Failed</h3>
                      <p className="text-gray-600">
                        The CEDEFOP map cannot be embedded due to security restrictions. Please use the external link below.
                      </p>
                      <div className="space-y-3">
                        <a 
                          href="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/scheme-fiches-map" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open CEDEFOP Map
                        </a>
                        <button
                          onClick={retryLoad}
                          className="block mx-auto flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Try Again
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.cedefop.europa.eu/en/tools/apprenticeship-schemes/scheme-fiches-map"
                    className="w-full h-full border-0"
                    title="CEDEFOP Apprenticeship Schemes Map"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    allow="fullscreen"
                    onError={handleIframeError}
                    onLoad={handleIframeLoad}
                  />
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Interactive Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Click on countries to explore schemes</li>
                    <li>• Filter by scheme types and categories</li>
                    <li>• Access detailed scheme fiches</li>
                    <li>• Compare different approaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Data Coverage</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• All EU member states</li>
                    <li>• EEA countries</li>
                    <li>• Candidate countries</li>
                    <li>• Regular updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Use Cases</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Policy development</li>
                    <li>• Best practice identification</li>
                    <li>• Cross-country learning</li>
                    <li>• Partnership building</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 